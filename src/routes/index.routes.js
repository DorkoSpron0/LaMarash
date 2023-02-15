const {Router} = require('express');
const router = Router();

router.get(('/'), (req, res) => {
    res.json({'title': 'Hello HIJO DE LA GRAN PUTA MALDITA PUELCA'})
});

module.exports = router;