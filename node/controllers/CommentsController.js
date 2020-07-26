
const con = require('../utils/database');

exports.getCommentsById = async (req, res, next) => {

    let id = req.query.id;
    let result = []
    try {
        result = await con.execute(`SELECT c.text , t1.name AS Team_A, t2.name AS Team_B,
                                           g.resualtA AS Score_A,g.resualtB AS Score_B,c.creation_date
                                      FROM comments c
                                      JOIN gamesres g ON c.game_id = g.id
                                      JOIN teams t1 ON g.teamA_id = t1.id
                                      JOIN teams t2 ON g.teamB_id = t2.id
                                     WHERE g.id =  ${id}`)
        result = result[0];
    } catch (err) {
        result = err.message;
    }

    res.send(result)
}


exports.insertComment = async (req, res, next) => {
    let comm = {
        text: req.query.text,
        game_id: req.query.game_id
    }


    let c = []
    try {
        c = await con.execute("INSERT INTO comments (text, game_id) VALUES (?,?)", [comm.text,comm.game_id])
        c = c[0];
    } catch (err) {
        c = err.message;
    }

    res.send(c)
}