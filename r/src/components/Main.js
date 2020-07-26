import React, { Component } from 'react';
import FootBall from '../pages/FootBall';
import BasketBall from '../pages/BasketBall';
import AllSports from '../pages/AllSports';
import GameB from '../pages/GameB';
import GameF from '../pages/GameF';
import { Route } from 'react-router-dom';

class Main extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <div className="App row mt-5">
                    <Route path="/" exact component={AllSports} />
                    <Route path="/FootBall" exact component={FootBall} />
                    <Route path="/Basketball" exact component={BasketBall} />
                    <Route path="/Basketball/:id" exact component={GameB} />
                    <Route path="/FootBall/:id" exact component={GameF} />
                </div>
            </div>
        );
    }
}

export default Main;











