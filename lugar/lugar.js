const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);


    let resp = await axios.get(`http://api.positionstack.com/v1/forward?access_key=0e734c3efb1c40727436b766d74d4c34&query=${encodedUrl}`)

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para la busqueda ${direccion}`)
    }


    let location = resp.data.data[0];
    let longitud = location.longitude;
    let latitud = location.latitude;


    return {
        direccion: location.label,
        lag: longitud,
        lng: latitud
    };
};

module.exports = { getLugarLatLng };