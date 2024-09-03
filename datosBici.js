const fs = require('fs');

const bicicletas = JSON.parse(fs.readFileSync('./bicicletas.json', 'utf-8'));

console.log(bicicletas);

module.exports = bicicletas;
