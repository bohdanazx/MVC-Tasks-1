const http = require('http');
const PORT = 3000;
const { handleHome, handleAddCar, handleCar, handlePageNotFound } = require('./routes/index');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/' && method === 'GET') {
        handleHome(res);
    } else if (url === '/add-car') {
        handleAddCar(method, req, res);
    } else if (url === '/car' && method === 'GET') {
        handleCar(res);
    } else {
        handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
