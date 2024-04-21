const http = require('http');
const PORT = 3000;
const htmlGenerator = require('./htmlGenerator');
const cars = require('./cars');

const server = http.createServer((req, res) => {
    const carsData = cars.getCars();
    console.log(carsData);

    res.setHeader('Content-Type', 'text/html');

    res.write(htmlGenerator.getHTMLDocumentStart());

    res.write('<body>');

    carsData.forEach(car => {
        res.write(`<p>${cars.getCarInformation(car.id)}</p>`);
        res.write(`<p>${cars.getCarAge(car.id)}</p>`);
    });

    res.write('</body>');

    res.write(htmlGenerator.getHTMLDocumentEnd());

    res.end();
});


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
