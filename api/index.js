//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require("axios");
const {Country} = require("./src/db.js");


// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  //Lo coloco aca porque antes de que se inicie el servidor
  //quiero que se cree en la base de datos todos los paises
  //que tiene la api 
  const countriesApi = await axios.get("https://restcountries.com/v3.1/all");

  let countriesApiFiltered = countriesApi.data.map((pais) => ({
    id: pais.cca3,
    nombre: pais.name.common,
    imagen_de_la_bandera: pais.flags.svg,
    continente: pais.region,
    capital: pais.capital,
    subregion: pais.subregion,
    area: pais.area,
    poblacion: pais.population,
  }));

  await Country.bulkCreate(countriesApiFiltered);

  //se inicia el servidor
  server.listen(3004, () => {
    console.log('%s listening at 3004'); 
    // eslint-disable-line no-console
  });
});
