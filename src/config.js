require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

const title = 'Naše Školy';
const description = 'České školy.';

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
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
}, environment);
