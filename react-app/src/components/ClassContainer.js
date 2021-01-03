import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CreateClass from './CreateClass'
import EditClass from './EditClass'
import './CreateClass.css'
import { changeCard } from '../store/cards'


const ClassContainer = () => {


    const [editMode, setEditMode] = useState(false)

    

    const changeMode = (e) => {
        e.preventDefault()
        setEditMode(!editMode)
    }

    


    return (

        <div>
            {editMode ? <EditClass /> : <CreateClass />}
            {editMode ? <button onClick={changeMode}>Change to Create Classroom Form</button>
            : <button onClick={changeMode}>Change to Edit Classroom Form</button>}
        </div>
    )



}


export default ClassContainer