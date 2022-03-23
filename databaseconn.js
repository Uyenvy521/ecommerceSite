const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'ecommapp',
    password:'jaden123',
    port:5432
});

module.exports=pool;