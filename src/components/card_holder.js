
import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import elementArray from './list_of_elements';
import {randomNumberBetween} from '../helpers';


class CardHolder extends React.Component {

    getRandomSetOfCards(numOfCardsToGet){
        const tempArray = elementArray.slice(0);
        const newElementArray = []

        for(let cardIndex=0; cardIndex<numOfCardsToGet; cardIndex++) {
            newElementArray.push(
                tempArray.splice(randomNumberBetween(0, tempArray.length-1), 1)[0]);
        }
        return newElementArray
    }

    render(){

        const cardArray = this.getRandomSetOfCards(16);
        const cardInput = cardArray.map( (element, index) => {
            return(
                <Card key={index} text={element.name}/>
            )
        });

        return(
            <div className="cardHolder">
                {cardInput}
            </div>
        )
    }
}

export default CardHolder

