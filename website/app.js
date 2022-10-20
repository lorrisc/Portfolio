const client = require("./database");

(async () => {
    await client.connect();

    const result = await client.query("SELECT * FROM project");
    console.log(result.rows);
    client.end();
    module.exports = result;
})();

// client.query(`select * from project`, (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end();
// });
