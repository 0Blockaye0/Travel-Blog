const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// VVVVV check if this is correct path VVVV
db.images = require("./image.model.js")(sequelize, Sequelize);

module.exports = db;