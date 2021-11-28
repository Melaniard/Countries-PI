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
const { conn, Country } = require('./src/db.js');
const axios = require('axios');

const peticionApi = async function () {
  const Api = await axios.get(`https://restcountries.com/v3/all`)
  const datosBd = Api.data.map(country => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[1],
      continent: country.region,
      capital: country.capital?.length
        ? country.capital[0]
        : 'The capital is not found',
      subregion: country.subregion
        ? country.subregion
        : 'The subregion is not found',
      area: country.area,
      population: country.population,
    }
  });
  const aux = await Country.bulkCreate(datosBd) //guardando en la base de datos
}
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  peticionApi()

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});