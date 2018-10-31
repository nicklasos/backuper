const db = require('./server/config').db;

module.exports = {
  production: {
    client: db.production.driver,
    connection: {
      database: db.production.database,
      user: db.production.user,
      password: db.production.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
  dev: {
    client: db.development.driver,
    connection: {
      database: db.development.database,
      user: db.development.user,
      password: db.development.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
  test: {
    client: db.test.driver,
    connection: {
      database: db.test.database,
      user: db.test.user,
      password: db.test.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};

