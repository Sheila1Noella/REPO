const Pools = require('pg');
// const pool = require('pg').pool;

const pool = new Pools.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: ' ',
    port: 5432,
})

if(pool){
    console.log("connected");
    pool.query('SELECT * FROM table2;', (err, res) =>{
        console.log(err,res);
        pool.end();
    });
}
else{
    console.log("not connected");
}
