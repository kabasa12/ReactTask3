import React, { Component } from 'react';
import * as axios from 'axios';
import { Link } from 'react-router-dom';

class FootBall extends Component {

    state = {
        catg:1
    }

    componentDidMount() {
        this.getGameByCategoryId();
    }

    async getGameByCategoryId() {
        try {
            await axios.get(`http://www.localhost:4000/getGameByCategoryId?id= ${this.state.catg}`).then(response => {
                this.setState({ games: response.data }, () => { console.log("games : ", this.state.games) })
            })
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let table = [];
        if (this.state.games) {
            table = this.state.games.map(game => {
                let gameId= `/FootBall/${game.id}`
                return (
                    <tr key={gameId}>
                        <th><Link to={gameId}>{game.Team_A}</Link></th>
                        <td>{game.Team_B}</td>
                        <td>{game.Score_A}</td>
                        <td>{game.Score_B}</td>
                        <td>{(new Date(game.game_date)).toLocaleDateString()}</td>
                        <td>{game.Category}</td>
                    </tr>
                )
            })
        }


        return (
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Team A</th>
                            <th scope="col">Team B</th>
                            <th scope="col">Score A</th>
                            <th scope="col">Score B</th>
                            <th scope="col">Game Time</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FootBall;