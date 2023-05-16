const router = require('express').Router();
const wowController = require('../controllers/wowController');

router.get('/', wowController.indexController);
router.get('/search/:page/movies', wowController.searchController);
router.get('/movie/:title/:wowIndex', wowController.metadataController);

module.exports = router;
