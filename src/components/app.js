import React from 'react';
import '../assets/css/app.css';
import GameBoard from './game_board';
import HeaderBar from './header_bar'

const App = () => (
    <div>
        <div className="app">
            <HeaderBar />
            <GameBoard />
        </div>
    </div>
);

export default App;
