import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as classActions from '../../store/classrooms'
import { useHistory } from 'react-router-dom'

// import SearchBar from '../FullPageDiv/SearchBar'

import './CreateClass.css'

const CreateClass = () => {
    let history = useHistory()
    const teacherId = useSelector(state => state.session.user.id);
    const [className, setClassName] = useState('')
    const [names, setNames] = useState([]);
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)

    dispatch(classActions.getRoom(teacher_class_id))

    const updateClassName = (e) => {
        setClassName(e.target.value)
    }

    const updateNames = (e) => {
        let temp_name = [...names]
        temp_name[e.target.id] = e.target.value
        setNames(temp_name)
    }

    const removeName = (e) => {
        e.preventDefault()
        const removeIndex = e.target.id

        setNames(names.splice(removeIndex, 1))
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const generateList = () => {
        return names.map((el, i) => (
            // <label className='studentInputLabel'>
            //         Student Name
            <div className='addStudentRow'>
                <button className='removeStudentButton'onClick={removeName}>Remove</button>
                <input className='editClassField' id={i} type='text' onChange={updateNames} value={el || ''} placeholder='Charlie R.' />
            </div>
        ))
    }

    const addRow = (e) => {
        e.preventDefault()
        setNames([...names, ''])
    }

    const handleSubmitCreate = async (e) => {
        e.preventDefault()

        const classroomData = {
            'name': className,
            'password': password
        }
        console.log('classsroom data', classroomData)

        const new_class = await dispatch(classActions.createRoom(teacherId, classroomData))
        const classroomId = new_class.id


        await dispatch(classActions.createStudents(classroomId, names))


        history.push('/teachers/:id')
    }

    return (
        (<div className='createClassDiv'>
            <div className='upperHolder'>
                <div className='upperCreateClassDiv'>
                    <div className='infoDiv'>
                        <div className='className'>{className}</div>
                        <div className='divassword'>{password}</div>
                    </div>
                    <div className='lowerDiv'>
                        <div className='studentNameDiv'>
                            {names.map(name => (
                                <div className='studentName'>{name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div class='lowerCreateClassDiv'>
                <div className='createClassDiv'>
                    {/* <div className='upperEditClassDiv'>
                        <h1 className='editClassHeader'>Create your class ~</h1>
                    </div> */}
                    <form className='studentInputForm'>
                        <div className='editDetailDiv'>
                            <input className='infoInput createInput' placeholder="(e.g. Mary's Class)" onChange={updateClassName}/>
                            <h1 className='infoLabel createLabel'>~ Class Name</h1>
                        </div>
                        <div className='editDetailDiv'>
                            <input className='infoInput createInput' placeholder='(e.g. 4321)' onChange={updatePassword} />
                            <h1 className='infoLabel createLabel'>~ Password for class login</h1>
                        </div>
                        {/* {generateCurrentStudentsList()} */}
                        <div className='scrollDiv'>
                            {generateList()}
                        </div>
                        <button className='addCreateStudentButton' onClick={addRow}>Add Student</button>
                        <div className='createButtonDiv'>
                            <h2 className='warningText textDiv'>Warning! Overwrites current class!</h2>
                            <button className='createClassSubmit' onClick={handleSubmitCreate}>Submit Changes</button>
                        </div>
                    </form>
                </div>
{/*
                <div className='blankClass'>
                    <div className='infoDiv'>
                        <p className='className'>{className}</p>
                        <p className='password'>{password}</p>
                    </div>
                    <div className='lowerDiv'>
                        <div className='studentNameDiv'>
                        {names.map(name => (
                            <p className='studentName'>
                                {name}
                            </p>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='classButtonDiv'>
                <div className='completeDiv'>
                    <h2 className='warningText textDiv'>Warning: Overwrites current class</h2>
                    <button className='myButton' onClick={handleSubmitCreate} >Complete Class!</button>

                </div>
                <button className='add-row myButton' onClick={addRow}>Add Row</button>
            </div>
            <div className='inputClassDiv'>
                <form className='studentInputForm'>
                    <div className='studentLabelDiv'>
                        <label className='studentInputLabel'>
                            Class Name
                            <input className='studentInputField' type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
                        </label>
                        <label className='studentInputLabel'>
                            Password for class login
                            <input className='studentInputField' type='text' onClick={updatePassword} placeholder='Super-Secret12345' />
                        </label>
                    </div>
                    <div className='listDiv'>
                        {generateList()}

                    </div>
                </form>
            </div> */}
            </div>
        </div>
        )
    )
}

export default CreateClass;
