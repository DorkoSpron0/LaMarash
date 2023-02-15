const {Router} = require('express');
const router = Router();

//ROUTES 
router.get(('/index'), (req, res) => {
    res.send('Hello HIJO DE LA GRAN PUTA MALDITA PUELCA')
});

router.get(('/cuenta'), (req, res) => {
    res.send('YO TE DIJE MALDITA PUELCA QUE CUANDO LLEGARAMOS ME MAMARIAS EL BICHO')
});


module.exports = router;