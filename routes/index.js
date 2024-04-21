const fs = require('fs');
const qs = require('querystring');
const homeView = require('../views/home');
const carView = require('../views/car');
const addCarView = require('../views/add-car');

const handleHome = (res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(homeView.renderPage());
    res.end();
};

const handleAddCar = (method, req, res) => {
    if (method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addCarView.renderPage());
        res.end();
    } else if (method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = qs.parse(body);
            fs.writeFile('formData.json', JSON.stringify(formData), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    res.writeHead(302, { 'Location': '/car' });
                    res.end();
                }
            });
        });
    }
};

const handleCar = (res) => {
    fs.readFile('formData.json', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('404 Page Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(carView.renderPage(data));
            res.end();
        }
    });
};

const handlePageNotFound = (res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 Page Not Found');
    res.end();
};

module.exports = {
    handleHome,
    handleAddCar,
    handleCar,
    handlePageNotFound
};
