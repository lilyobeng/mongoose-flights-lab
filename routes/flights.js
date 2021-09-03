var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')


router.get('/', flightsCtrl.getAll);
router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/:id',flightsCtrl.addDestination);


module.exports = router;
