import React, { Component } from 'react';
import * as axios from 'axios';


class GameB extends Component {

    state = {
        comments:[{}]
    }

    componentDidMount() {
        this.getGameById();
        this.getCommentsById();
    }

    async getGameById() {
        
        let id = this.props.match.params.id;

        //console.log("id = " ,id)
        try {
            await axios.get(`http://www.localhost:4000/getGameById?id=${id}`).then(response => {
                this.setState({ games: response.data }, () => { console.log("Extra : ", this.state.games) })
            })
        } catch (e) {
            console.log(e);
        }
    }

    async getCommentsById() {
        
        let id = this.props.match.params.id;

        try {
            await axios.get(`http://www.localhost:4000/getCommentsById?id=${id}`).then(response => {
                this.setState({ comments: response.data }, () => { console.log("Comm : ", this.state.comments) })
            })
        } catch (e) {
            console.log(e);
        }
    }

    async onSubmit() {
        let gameId = this.props.match.params.id;
        let comm = {
            text: document.getElementById('form18').value
        }
        //console.log(comm)
        if (comm.text === "") return;

        try {
            await axios.get(`http://www.localhost:4000/insertComment?text=${comm.text}&game_id=${gameId}`).then(response => {
                console.log("Comment : ", response.data)
            })
        } catch (e) {
            console.log(e);
        }

        document.getElementById('form18').value = '';

        try {
            await axios.get(`http://www.localhost:4000/getCommentsById?id=${gameId}`).then(response => {
                this.setState({ comments: response.data }, () => { console.log("Comm : ", this.state.comments) })
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let table = [];
        if (this.state.games) {
            table = this.state.games.map((game,index) => {
                return (
                    <tr key={index}>
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

        let Commtable = [];
        if (this.state.comments) {
            Commtable = this.state.comments.map((comm,index) => {
                return (
                    <tr key={index}>
                        <td>{comm.Team_A}   Vs   {comm.Team_B}</td>
                        <td>{comm.Score_A}   -   {comm.Score_B}</td>
                        <td>{comm.text}</td>
                        <td>{(new Date(comm.creation_date)).toLocaleDateString()}</td>
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
                
                <div className="form-group">
                    <div className="md-form mb-4 pink-textarea active-pink-textarea">
                        <label htmlFor="form18">Any comments?</label>
                        <textarea id="form18" className="md-textarea form-control" rows="3" cols="150"></textarea>
                    </div>    
                    <button type="button" className="btn btn-success" onClick={() => this.onSubmit()}>OK</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Teams</th>
                            <th scope="col">Resualts</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Commtable}
                    </tbody>
                </table>
            </div>
        );
        
    }
}

export default GameB;