const dbConfig = require("../config/db.config.js");


// const sequelizeExportStuff = require("sequelize");
// const Sequelize = sequelizeExportStuff.Sequelize;

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL)
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
// //   operatorsAliases: false, // does not work in this version

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Event = require("./event.model.js")(sequelize, Sequelize);

module.exports = db;


// ineedTheFunk = require("./event.model.js");
// db.Event = ineedTheFunk(sequelize, Sequelize);

// function should give you Event
