const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "portfolio",
});

// client.connect();

module.exports = client;
