// require('babel-polyfill');

const title = 'Moje Školy';
const description = 'České školy.';

module.exports = {
  isProduction: (process.env.NODE_ENV || 'production') === 'production',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 80,
  apiHost: process.env.APIHOST || 'api.mojeskoly.cz',
  apiPort: process.env.APIPORT || 80,
  app: {
    title: title,
    description: description,
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': title,
        'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'og:locale': 'cs_CZ',
        'og:title': title,
        'og:description': description,
        'twitter:card': 'summary',
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  }
};
