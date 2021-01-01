import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './CreateClass.css'

const CreateClass = () => {
    
    const [names, setNames] = useState(['test']);
    const [password, setPassword] = useState('')
    // const createdBy = useSelector(state => state.session.user.id);
    
    const dispatch = useDispatch();

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
    
    
    return (
        <div>

            <h1>Create class</h1>
    
            <form className='student-creation'> 
                {generateList()}
                <button className='add-row' onClick={addRow}>Add Row</button>
                <label>
                    Secret password for class login 
                    <input type='text' placeholder='Super-Secret12345' />
                </label>
            
            </form>
        </div>
    )
}

export default CreateClass;
