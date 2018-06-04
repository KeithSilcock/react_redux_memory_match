import React from 'react';
import {connect} from 'react-redux';
import ScoreBoard from './score_board';

class HeaderBar extends React.Component {

    render(){

        return(
            <div className='headerBar'>
                <ScoreBoard />
            </div>
        )
    }
}

export default HeaderBar