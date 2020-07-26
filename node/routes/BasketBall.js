const express = require('express');
const router = express.Router();


const BasketBallController = require('../controllers/SportsController');
const CommentsController = require('../controllers/CommentsController');

router.get('/getTeams', BasketBallController.getTeams);
router.get('/getCategoryByName', BasketBallController.getCategoryByName);
router.get('/getGames', BasketBallController.getGames);
router.get('/getGameByCategoryId', BasketBallController.getGameByCategoryId);
router.get('/getGameById', BasketBallController.getGameById);
router.get('/getCommentsById', CommentsController.getCommentsById);
router.get('/insertComment', CommentsController.insertComment);

module.exports = router;