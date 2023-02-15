const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    database: 'lamarsh',
    user:'root',
    password: ''
});

pool.getConnection(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});




module.exports = pool