const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'lamarsh',
    user:'root',
    password: ''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});




module.exports = conexion