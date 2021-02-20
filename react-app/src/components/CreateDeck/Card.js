import React from 'react'

const Card = (props) => {
    return (
    <div className='blankCard'>
        <div className='questionDiv'>
            {props.confirm ? <p>Card Successfully Submitted</p> : null}
            <p className='question'>{props.title}</p>
        </div>
        <div className='choiceDiv'>
            {props.choices.map((choice, i) => (
                <div key={i.toString()} className='choices'>{`~ ${choice}`}</div>
            ))}
        </div>
        <div className='answer'>{props.answer}</div>
    </div>
    )
}

export default Card
