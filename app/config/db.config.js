module.exports = {
    HOST: "66.227.239.84",
    USER: "hctcxjaexnlgll",
    PASSWORD: "3ecad80874e37de05dfe91bce03fc73d09ea18a8259d43b5efe39990313a0283",
    DB: "ddrs75utrccb90",
    dialect: "postgres",

    // HOST: "localhost",
    // USER: "tisdalefry",
    // PASSWORD: null,
    // DB: "calendar",
    // dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};