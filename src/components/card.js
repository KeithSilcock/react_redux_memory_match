import React from 'react';
import cardBack from '../assets/images/cardBack.jpg';

class Card extends React.Component {

    render(){



        return(
            <div className='card'>
                <span>{this.props.text}</span>
                <img src={cardBack} alt="card back" className='cardImg'/>
            </div>
        )
    }
}

export default Card