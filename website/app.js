const client = require("./database");

client.connect();

client.query(`select * from project`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end();
});
