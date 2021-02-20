import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/cards'

import Card from './Card'

import './CreateCard.css'

const CreateCard = () => {
    // const [subject, setSubject] = useState('')
    const [title, setTitle] = useState('')
    const [choices, setChoices] = useState([])
    const [answer, setAnswer] = useState('')
    const [confirm, setConfirm] = useState(false)
    const dispatch = useDispatch()
    const teacher_id = useSelector(state => state.session.user.id)

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            'title': title,
            // "subject": subject,
            'possible_answers': choices,
            'answer':answer,
            'created_by': teacher_id
        }

        dispatch(cardActions.addCard(formData))
        userFeedback()
        clearInputs()
    }

    const clearInputs = () => {
        // setSubject('')
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
        <div className='createCardDiv'>

            <div className='upperDiv'>
                <Card
                    confirm={confirm}
                    title={title}
                    choices={choices}
                    answer={answer}
                />
            </div>

            <div className='inputDiv'>
                <form className='inputForm'>
                    <div className='createCardHeaderDiv'>
                        <button className='addToDeckButton' onClick={handleSubmit}>Add to Your Cards</button>
                        <div className='createCardHeader'>~ Create Your Card ~</div>
                        <button className='clearCardButton' onClick={clearInputs}>Clear Card</button>
                    </div>
                    <div className='labelsInputsDiv'>
                        <div className='createCardLabels'>
                            <div className='createCardLabel'>Question ~</div>
                            <div className='createCardLabel'>Choices ~</div>
                            <div className='createCardLabel'>Answer ~</div>
                        </div>
                        <div className='createCardInputs'>
                            <input placeholder='(e.g. What is 1 + 1?)' className='inputField' id='question' value={title} type='text' onChange={handleQuestionChange} />
                            <input placeholder='(e.g. 1, 2, 3, 4)' className='inputField' id='choices' value={choices} type='text' onChange={handleChoicesChange} />
                            <input placeholder='(e.g. 2)' className='inputField' id='answer' value={answer} type='text' onChange={handleAnswerChange} />
                        </div>
                    </div>

                    <div className='addClearButtonsDiv'></div>
                </form>
            </div>
        </div>
        )

}

export default CreateCard
