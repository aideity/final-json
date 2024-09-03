
const fs = require('fs');

const bicicletas = fs.readFileSync('./bicicletas.json', 'utf-8');


const JSONParseado = JSON.parse(bicicletas);

console.log(JSONParseado);

