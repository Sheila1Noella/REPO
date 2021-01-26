var unames = document.getElementById("unam").value;
var pnumber = document.getElementById("pnbr").value;
var password = document.getElementById("pwd").value;

function clicking(){

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
    pool.query("INSERT INTO table3 (username,phone_number,password) VALUES ('${unames.value}','Hi','Passwordd');", (err, res) =>{
        console.log(err,res);
        pool.end();
    });
}
else{
    console.log("not connected");
}

}
