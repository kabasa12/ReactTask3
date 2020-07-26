import React, { Component } from 'react';
import * as axios from 'axios';

class AllSports extends Component {

    state = {

    }

    componentDidMount() {
        this.getGames()
    }

    async getGames() {
        try {
            await axios.get(`http://www.localhost:4000/getGames`).then(response => {
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
                return (
                    <tr>
                        <th>{game.id}</th>
                        <td>{game.Team_A}</td>
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
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
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

export default AllSports;