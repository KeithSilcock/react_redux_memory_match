import React from 'react';
import {connect} from 'react-redux';
import {incrementAttempts, incrementMatches} from "../actions";

class ScoreBoard extends React.Component{

    incrementAttemptsOnClick(){
        this.props.incrementAttempts(this.props.score);
    }
    incrementMatchesOnClick(){
        this.props.incrementMatches(this.props.matches);
    }

    render(){
        const {matches, score} = this.props;

        return(
            <div>
                <p className='stats attempts'>Current Attempts: {score}</p>
                <p className='stats matches'>Current Matches: {matches}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        score: state.score.attempts,
        matches: state.score.matches,
    }
}

export default connect(mapStateToProps, {incrementAttempts, incrementMatches})(ScoreBoard);