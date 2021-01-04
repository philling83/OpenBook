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
            image: 'Upload Image Here',

        };
    }

    handleSubjectChange = (event) => {
        this.setState({subject: event.target.value})
    }
    handleQuestionChange = (event) => {
        this.setState({question: event.target.value})
    }
    handleChoicesChange = (event) => {
        let choices = event.target.value.split(',')
        this.setState({choices: choices})
        console.log(this.state.choices)
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
                            {console.log(this.state.choices)}
                            {this.state.choices.map(choice => (
                                <p className='choices'>{choice}</p>
                            ))}
                            <p className='answer'>{this.state.answer}</p>
                        </div>
                        <div className='cardImageDiv'>
                            {this.state.image === 'Upload Image Here' &&
                                <h2 className='placeholderText'>Upload Image Here</h2>
                            }
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
                        <input className='inputField' id='question' type='text' value={this.state.value} onChange={this.handleQuestionChange} />
                    </label>
                    <label className='inputLabel'>
                        Choices:
                        <input className='inputField' id='choices' type='text' value={this.state.value} onChange={this.handleChoicesChange} />
                    </label>
                    <label className='inputLabel'>
                        Answer:
                        <input className='inputField' id='answer' type='text' value={this.state.value} onChange={this.handleAnswerChange} />
                    </label>
                    <label className='inputLabel'>
                        ImageURL:
                        <input className='inputField' id='image' type='url' value={this.state.value} onChange={this.handleImageChange} />
                    </label>
                </form>
            </div>
        </div>
        )
    }
}

export default CreateCard
