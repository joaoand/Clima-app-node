const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let { getLugarLatLng } = require('./lugar/lugar.js')
let { getClima } = require('./clima/clima.js');

let getInfo = async(direccion) => {

    try {
        let coors = await getLugarLatLng(direccion);

        let temp = await getClima(coors.lag, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));