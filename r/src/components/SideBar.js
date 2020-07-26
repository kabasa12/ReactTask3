import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {

    state = {

    }


    render() {
        return (
            <div className="Blog MainBlog">
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">All</Link></li>
                        <li><Link to="/FootBall">FootBall</Link></li>
                        <li><Link to="/BasketBall">BasketBall</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;











