import React from 'react';
import './App.css';

import Main from './components/Main';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div className="container">
            <div className="App">
                    <div className="row">
                        <Header></Header>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <Main></Main>
                        </div>
                        <div className="col-md-3">
                            <SideBar></SideBar>
                        </div>
                    </div>
            </div>
        </div>  
        </BrowserRouter>
    </div>
  );
}

export default App;
