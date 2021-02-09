import React, { useState } from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import CreateClass from './CreateClass'
import EditClass from './EditClass'
// import { changeCard } from '../../store/cards'

import './CreateClass.css'


const ClassContainer = () => {


    const [editMode, setEditMode] = useState(false)

    const changeMode = (e) => {
        e.preventDefault()
        setEditMode(!editMode)
    }

    return (

        <div>
            {editMode ? <EditClass /> : <CreateClass />}
            {editMode ? <button onClick={changeMode} className='myButton changeMode'>Create Class</button>
            : <button onClick={changeMode} className='myButton changeMode'>Edit Class</button>}
        </div>
    )
}


export default ClassContainer
