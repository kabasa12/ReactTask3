const con = require('../utils/database');

exports.getCategoryByName = async (req, res, next) => {
    let name = req.query.name;
    let categories = [];
    try {
        categories = await con.execute(`SELECT * FROM categories WHERE name = "${name}"`);
        categories = categories[0];
    } catch (err) {
        categories = err.message;
    }
    res.send(categories);
}

exports.getTeams = async (req, res, next) => {
    let teams = [];
    try {
        teams = await con.execute(`SELECT * FROM teams`);
        teams = teams[0];
    } catch (err) {
        teams = err.message;
    }
    res.send(teams);
}

exports.getGames = async (req, res, next) => {
    let games = [];
    try {
        games = await con.execute(`SELECT g.id,t1.name AS Team_A,t2.name AS Team_B, g.resualtA AS Score_A,
                                          g.resualtB AS Score_B,g.game_date,c.name AS Category
                                     FROM gamesres g 
                                     JOIN teams t1 ON g.teamA_id = t1.id
                                     JOIN teams t2 ON g.teamB_id = t2.id
                                     JOIN categories c ON g.category_id = c.id`);
        games = games[0];
    } catch (err) {
        games = err.message;
    }
    res.send(games);
}

exports.getGameByCategoryId = async (req, res, next) => {

    let id = req.query.id;
    let result = [];
    try {
        result = await con.execute(`SELECT g.id,t1.name AS Team_A,t2.name AS Team_B, g.resualtA AS Score_A,g.resualtB AS Score_B,g.game_date,c.name AS Category
                                      FROM gamesres g 
                                      JOIN teams t1 ON g.teamA_id = t1.id
                                      JOIN teams t2 ON g.teamB_id = t2.id
                                      JOIN categories c ON g.category_id = c.id
                                     WHERE c.id = ${id}`);
        result = result[0];
    } catch (err) {
        result = err.message;
    }

    res.send(result);
}


exports.getGameById = async (req, res, next) => {

    let id = req.query.id;
    let result = [];
    try {
        result = await con.execute(`SELECT g.id,t1.name AS Team_A,t2.name AS Team_B, g.resualtA AS Score_A,g.resualtB AS Score_B,g.game_date,c.name AS Category
                                      FROM gamesres g 
                                      JOIN teams t1 ON g.teamA_id = t1.id
                                      JOIN teams t2 ON g.teamB_id = t2.id
                                      JOIN categories c ON g.category_id = c.id
                                     WHERE g.id = ${id}`);
        result = result[0];
    } catch (err) {
        result = err.message;
    }

    res.send(result);
}