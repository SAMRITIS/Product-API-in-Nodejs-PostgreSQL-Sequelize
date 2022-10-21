module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "ac33d885",
    DB: "heritage",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 200000,
        idle: 1000000,
    },
};

