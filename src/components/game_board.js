import React from 'react';
import {connect} from 'react-redux';
import CardHolder from './card_holder';

class GameBoard extends React.Component {

    render(){

        // const cardArray =

        return(
            <div className='gameContainer'>

                <div className="cardArea">
                    <CardHolder />
                </div>
            </div>
        )
    }
}

export default GameBoard