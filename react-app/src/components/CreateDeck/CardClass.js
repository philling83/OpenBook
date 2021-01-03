import React from 'react'

import './CardClass.css'

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            question: '',
            choices: [],
            answer: '',
            image: '',

        };
    }

    handleSubjectChange = (event) => {
        this.setState({subject: event.target.value})
    }
    handleQuestionChange = (event) => {
        this.setState({question: event.target.value})
    }
    handleChoicesChange = (event) => {
        console.log(event.target.value)
        this.setState({choices: event.target.value})
    }
    handleAnswerChange = (event) => {
        this.setState({answer: event.target.value})
    }
    handleImageChange = (event) => {
        this.setState({image: event.target.value})
    }



    render() {
        return (
        <div class='createCardDiv'>
            <div class='upperDiv'>
                <div className='blankCard'>
                    <div className='questionDiv'>
                        <p className='subject'>{this.state.subject}</p>
                        <p className='question'>{this.state.question}</p>
                    </div>
                    <div className='lowerDiv'>
                        <div className='choiceDiv'>
                            <p className='choices'>{this.state.choices}</p>
                            <p className='answer'>{this.state.answer}</p>
                        </div>
                        <div className='cardImageDiv'>
                            <img className='cardImage' src={this.state.image} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='inputDiv'>
                <form className='inputForm'>
                    <label className='inputLabel'>
                        Subject:
                        <input className='inputField' id='subject' type='text' value={this.state.value} onChange={this.handleSubjectChange} />
                    </label>
                    <label className='inputLabel'>
                        Question:
                        <input className='inputField' id='question' type='text' value={this.state.qvalue} onChange={this.handleQuestionChange} />
                    </label>
                    <label className='inputLabel'>
                        Choices:
                        <input className='inputField' id='choices' type='text' value={this.state.value} onChange={this.handleChoicesChange} />
                    </label>
                    <label className='inputLabel'>
                        Answer:
                        <input className='inputField' id='answer' type='text' value={this.statevalue} onChange={this.handleAnswerChange} />
                    </label>
                    <label className='inputLabel'>
                        ImageURL:
                        <input className='inputField' id='image' type='url' value={this.statvalue} onChange={this.handleImageChange} />
                    </label>
                </form>
            </div>
        </div>
        )
    }
}

export default CreateCard
