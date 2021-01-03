import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './CreateClass.css'
import * as classActions from '../store/classrooms'

const CreateClass = () => {
    
    // const teacher_class_id = useSelector(state => state.session.user.classrooms_id) || null;
    const teacherId = useSelector(state => state.session.user.id);
    const [className, setClassName] = useState('')
    const [names, setNames] = useState([]);
    const [password, setPassword] = useState('')
    // const [loaded, setLoaded] = useState(false)
    // const [editMode, setEditMode] = useState(false)

    // const teacherId = 1
    
    const dispatch = useDispatch();

    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
    dispatch(classActions.getRoom(teacher_class_id))
    let list_of_students
    let classroom_name

    // useEffect(() => {
    //     (async () => {
    //         if (teacher_class_id) {

    //             setEditMode(true)

    //             dispatch(classActions.getRoom(teacher_class_id))

    //             console.log('hit if sttement')
    //             let resStudents = await fetch(`/api/students/from_class/${teacher_class_id}`)
    //             let resStudentsJson = await resStudents.json()
    //             // console.log(resStudentsJson)
                
    //             if (resStudentsJson) {
    //                 let students = resStudentsJson['list_of_students']
    //                 let student_names = students.map((el) => {
    //                     return el.name
    //                 })
    //                 console.log('student names',student_names)
    //                 setNames(student_names)
    //             }
    
    //             let resClassroom = await fetch(`/api/classrooms/${teacher_class_id}`)
    
    //             let resClassroomJson = await resClassroom.json()
    //             // console.log(resClassroomJson)
    
    //             if (resClassroomJson){
    //                 setClassName(resClassroomJson['name'])
    //             }
    //             console.log(resStudentsJson['list_of_students'])
    //             console.log(resClassroomJson['name'])
    //         }


    //         return setLoaded(true)
    //     })()
    // },[])






    const updateClassName = (e) => {
        setClassName(e.target.value)
    }

    const updateNames = (e) => {
        let temp_name = [...names]
        temp_name[e.target.id] = e.target.value
        setNames(temp_name)
        // console.log(names)
    }

    const removeName = (e) => {
        e.preventDefault()
        const removeIndex = e.target.id

        setNames(names.splice(removeIndex, 1))
        // console.log(names)
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
        // console.log(names)
    }

    const handleSubmitCreate = async (e) => {
        e.preventDefault()

        const classroomData = {
            'name': className,
            'password': password
        }
        console.log('classsroom data', classroomData)

        const new_class = await dispatch(classActions.createRoom(teacherId, classroomData))
        // console.log(new_class)
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
        (<div>

            <h1>Create class</h1>
    
            <form className='student-creation'> 
                <label>
                    Class Name
                    <input type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
                </label>
                {generateList()}
                <button className='add-row' onClick={addRow}>Add Row</button>
                <label>
                    Secret password for class login 
                    <input type='text' onClick={updatePassword} placeholder='Super-Secret12345' />
                </label>
                <button onClick={handleSubmitCreate} >Create Your Class! (Warning: Overwrites current class)</button>}
            
            </form>
        </div>
        )
    )
}

export default CreateClass;
