import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './CreateClass.css'
import * as classActions from '../store/classrooms'

const CreateClass = () => {
    
    const [className, setClassName] = useState('')
    const [names, setNames] = useState(['test']);
    const [password, setPassword] = useState('')
    // const teacherId = useSelector(state => state.session.user.id);
    const teacherId = 1
    
    const dispatch = useDispatch();

    const updateClassName = (e) => {
        setClassName(e.target.value)
    }

    const updateNames = (e) => {
        let temp_name = [...names]
        temp_name[e.target.id] = e.target.value
        setNames(temp_name)
        console.log(names)
    }

    const removeName = (e) => {
        e.preventDefault()
        const removeIndex = e.target.id

        setNames(names.splice(removeIndex, 1))
        console.log(names)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const generateList = () => {
        return names.map((el, i) => (
            <label>
                    Student Name 
                    <input id={i} type='text' onChange={updateNames} value={el || ''} placeholder='Charlie R.' />
                    <button onClick={removeName}>Remove Student</button>
            </label>
            
        ))
    }

    const addRow = (e) => {
        e.preventDefault()
        setNames([...names, ''])
        console.log(names)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const classroomData = {
            'name': className,
            'password': password
        }
        console.log('classsroom data', classroomData)

        const new_class = await dispatch(classActions.createRoom(teacherId, classroomData))
        console.log(new_class)
        const classroomId = new_class.id

        const studentData = {
            'list_of_students': names,
            'classroom_id': classroomId
        }

        await fetch('/api/students/', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(studentData),
        })


    }
    
    
    return (
        <div>

            <h1>Create class</h1>
    
            <form className='student-creation'> 
                <label>
                    Class Name
                    <input type='text' placeholder="Molly's Class" onChange={updateClassName} />
                </label>
                {generateList()}
                <button className='add-row' onClick={addRow}>Add Row</button>
                <label>
                    Secret password for class login 
                    <input type='text' placeholder='Super-Secret12345' />
                </label>
                <button onClick={handleSubmit} >Create Your Class!</button>
            
            </form>
        </div>
    )
}

export default CreateClass;
