const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
// settings
app.set('port', process.env.PORT || 3000);
app.set('json space', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// routers
app.use(require('./routes/index.routes'));
app.use("/productos", require("./routes/r_productos")); 
//start the server
app.listen(app.get('port'), () => {
    console.log(`Server On port ${app.get('port')}`);
});
