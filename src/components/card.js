import React from 'react';
import cardBack from '../assets/images/cardBack.jpg';

class Card extends React.Component {

    cardClicked(){
        console.log('Sup')
    }

    render(){

        return(
            <div className='card' onClick={this.cardClicked.bind(this)}>
                <span>{this.props.text}</span>
                <img src={cardBack} alt="card back" className='cardImg'/>
            </div>
        )
    }
}

export default Card