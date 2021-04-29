module.exports = {
    HOST: "chingu-calendar-backend.herokuapp.com",
    USER: "tisdalefry",
    PASSWORD: null,
    DB: "calendar",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};