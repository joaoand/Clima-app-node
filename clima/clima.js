const axios = require("axios");

const getClima = async(lat, lng) => {

    //axios 
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lng}&lon=${lat}&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`)

    return resp.data.main.temp;
};

module.exports = { getClima };