import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

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
    const [confirm, setConfirm] = useState(false)




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

        dispatch(cardActions.addCard(formData))
        userFeedback()
        clearInputs()

    }

    const clearInputs = () => {
        setImage('Upload Image Here')
        setSubject('')
        setTitle('')
        setChoices([])
        setAnswer('')
    }

    const userFeedback = () => {
        setConfirm(true)
        setTimeout(() => {
            setConfirm(false)
        }, 2000);
    }



        return (
        <div class='createCardDiv'>
            <div class='upperDiv'>
                <div className='blankCard'>
                    <div className='questionDiv'>
                        {confirm ? <p>Card Successfully Submitted</p> : null}
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
                            <img className='cardImage' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='inputDiv'>
                <form className='inputForm'>
                    <label className='inputLabel'>
                        Subject:
                        <input className='inputField' id='subject' value={subject} type='text' onChange={handleSubjectChange} />
                    </label>
                    <label className='inputLabel'>
                        Question:
                        <input className='inputField' id='question' value={title} type='text' onChange={handleQuestionChange} />
                    </label>
                    <label className='inputLabel'>
                        Choices:
                        <input className='inputField' id='choices' value={choices} type='text' val onChange={handleChoicesChange} />
                    </label>
                    <label className='inputLabel'>
                        Answer:
                        <input className='inputField' id='answer' value={answer} type='text' onChange={handleAnswerChange} />
                    </label>
                    <label className='inputLabel'>
                        ImageURL:
                        <input className='inputField' id='image' value={image} type='url' onChange={handleImageChange} />
                    </label>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
        )

}

export default CreateCard
