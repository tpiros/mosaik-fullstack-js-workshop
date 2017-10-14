const restify = require('restify');

const server = restify.createServer();

server.get('/', (req, res) => res.send('Hello Restify!'));
server.get('/products', (req, res) => res.send('Get Products'));
server.get('/products/:id', (req, res) => res.json(`Getting product with ID: ${req.params.id}`));

server.listen(3000, () => console.info('Magic happens on port 3000'));
