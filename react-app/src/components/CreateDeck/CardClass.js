import React, { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';

import './CardClass.css'

import * as cardActions from '../../store/cards'

const CreateCard = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         subject: '',
    //         title: '',
    //         choices: [],
    //         answer: '',
    //         image: 'Upload Image Here',
    //     };
    // }

    const [subject, setSubject] = useState('')
    const [title, setTitle] = useState('')
    const [choices, setChoices] = useState([])
    const [answer, setAnswer] = useState('')
    const [image, setImage] = useState('Upload Image Here')
    console.log(subject)
    console.log(title)
    console.log(choices)
    console.log(answer)
    console.log(image)



    // handleSubjectChange = (event) => {
    //     this.setState({subject: event.target.value})
    // }
    // handleQuestionChange = (event) => {
    //     this.setState({title: event.target.value})
    // }
    // handleChoicesChange = (event) => {
    //     let choices = event.target.value.split(',')
    //     this.setState({choices: choices})
    //     console.log(this.state.choices)
    // }
    // handleAnswerChange = (event) => {
    //     this.setState({answer: event.target.value})
    // }
    // handleImageChange = (event) => {
    //     this.setState({image: event.target.value})
    // }

    const dispatch = useDispatch()
    const teacher_id = useSelector(state => state.session.user.id)

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const handleQuestionChange = (e) => {
        setTitle(e.target.value)
    }

    const handleChoicesChange = (e) => {
        let choices = e.target.value.split (',')
        setChoices(choices)
    }

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleImageChange = (e) => {
        setImage(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        

        const formData = {
            'title': title,
            "subject": subject,
            'possible_answers': choices,
            'answer':answer,
            'image':image,
            'created_by': teacher_id
        }

        console.log(formData)

        return dispatch(cardActions.addCard(formData))
    }



    
        return (
        <div class='createCardDiv'>
            <div class='upperDiv'>
                <div className='blankCard'>
                    <div className='questionDiv'>
                        <p className='subject'>{subject}</p>
                        <p className='question'>{title}</p>
                    </div>
                    <div className='lowerDiv'>
                        <div className='choiceDiv'>
                            {choices.map(choice => (
                                <p className='choices'>{choice}</p>
                            ))}
                            <p className='answer'>{answer}</p>
                        </div>
                        <div className='cardImageDiv'>
                            {image === 'Upload Image Here' &&
                                <h2 className='placeholderText'>Upload Image Here</h2>
                            }
                            <img className='cardImage' src={image} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='inputDiv'>
                <form className='inputForm'>
                    <label className='inputLabel'>
                        Subject:
                        <input className='inputField' id='subject' type='text' onChange={handleSubjectChange} />
                    </label>
                    <label className='inputLabel'>
                        Question:
                        <input className='inputField' id='question' type='text' onChange={handleQuestionChange} />
                    </label>
                    <label className='inputLabel'>
                        Choices:
                        <input className='inputField' id='choices' type='text' val onChange={handleChoicesChange} />
                    </label>
                    <label className='inputLabel'>
                        Answer:
                        <input className='inputField' id='answer' type='text' onChange={handleAnswerChange} />
                    </label>
                    <label className='inputLabel'>
                        ImageURL:
                        <input className='inputField' id='image' type='url' onChange={handleImageChange} />
                    </label>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
        )
    
}

export default CreateCard
