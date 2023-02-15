const express = require('express');
const app = express();
const morgan = require('morgan');
// settings
app.set('port', process.env.PORT || 3000);
app.set('json space', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index.routes'));
// routers


//start the server
app.listen(app.get('port'), () => {
    console.log(`Server On port ${app.get('port')}`);
});
