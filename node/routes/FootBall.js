const express = require('express');
const router = express.Router();


const FootBallController = require('../controllers/SportsController');
const CommentsController = require('../controllers/CommentsController');

router.get('/getTeams', FootBallController.getTeams);
router.get('/getCategoryByName', FootBallController.getCategoryByName);
router.get('/getGames', FootBallController.getGames);
router.get('/getGameByCategoryId', FootBallController.getGameByCategoryId);
router.get('/getGameById', FootBallController.getGameById);
router.get('/getCommentsById', CommentsController.getCommentsById);
router.get('/insertComment', CommentsController.insertComment);

module.exports = router;