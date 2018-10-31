const db = require('./db');

const { where } = db.wheresify('users');

where({id: 1}).asCallback((err, result) => {
  console.log(result);
});

