const dotenv = require('dotenv');
dotenv.config({path: require('path').resolve(__dirname, '../.env')});

module.exports = {
  'db': {
    'production': {
      'host': process.env.DB_HOST,
      'user': process.env.DB_USERNAME,
      'password': process.env.DB_PASSWORD,
      'database': process.env.DB_DATABASE,
      'driver': 'mysql',
    },
    'development': {
      'host': process.env.DB_HOST,
      'user': process.env.DB_USERNAME,
      'password': process.env.DB_PASSWORD,
      'database': process.env.DB_DATABASE,
      'driver': 'mysql',
    },
    'test': {
      'host': 'localhost',
      'user': 'root',
      'password': '',
      'database': 'backuper_test',
      'driver': 'mysql',
    },
  },
};
