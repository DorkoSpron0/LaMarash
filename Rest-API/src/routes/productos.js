const {Router} = require('express');
const router = Router();
const conexion = require("./c_sql");

router.get(('/'), (req, res) => {
    
    conexion.query('SELECT * FROM productos', function(error,results,fields){
        if(error){
            throw error;
        }
        res.json({"productos":results});
    }); 
    conexion.end();
});


module.exports = router;