const bicicletas = require('./datosBici.js'); 

let dhBici = {
    bicicletas: bicicletas,

    buscarBici: function(id) {
      
        const resultado = this.bicicletas.filter(bicicleta => bicicleta.id === id);
        
        return resultado.length ? resultado[0] : null 
    },

        biciParaLaVenta: function() {
            return this.bicicletas.filter(bicicleta => !bicicleta.vendida);
        },
        totalDeVentas: function() {
            return this.bicicletas
                .filter(bicicleta => bicicleta.vendida)
                .reduce((total, bicicleta) => total + bicicleta.precio, 0); 
        }
    };



