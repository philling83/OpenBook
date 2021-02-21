import React from 'react'

import './Card.css'

const Card = (props) => {
    let tempAnswer

    if (props.completedArray && props.completedArray[props.counter-1] !== '~') {
        tempAnswer = props.answer;
        console.log('#######', props.counter, props.completedArray, tempAnswer, props.completedArray[props.counter])
    } else {
        tempAnswer = '';
    }

    return (
    <div className='blankCard'>
        <div className='questionDiv'>
            {props.confirm ? <p>Card Successfully Submitted</p> : null}
            <p className='question'>{props.title}</p>
        </div>
        <div className='choiceDiv'>
            {props.choices.map((choice, i) => (
                <div key={i.toString()} className='choices' onClick={() => props.handleGuess(i)}>{`~ ${choice}`}</div>
            ))}
        </div>
        <div className='answer'>{props.answer}</div>
    </div>
    )
}

export default Card
