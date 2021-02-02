const GET_ROOM = "classroom";
const REMOVE_ROOM = "classroom/add";
const ADD_STUDENTS = 'students/add'
const EDIT_STUDENTS = 'students/edit'

const setRoom = (room) => {
	return { type: GET_ROOM, payload: room };
};

const removeRoom = () => {
	return { type: REMOVE_ROOM, payload: null };
};

const addStudents = (students) => {
    return {type: ADD_STUDENTS, payload: students}
}

const changeStudents = (student) => {
    return {type: EDIT_STUDENTS, payload: student}
}





export const getRoom = (roomId) => async (dispatch) => {
	const response = await fetch(`/api/classrooms/${roomId}`);

	const resJSON = await response.json();

	dispatch(setRoom(resJSON));

	return response;
};

export const createRoom = (teacherId, formData) => async (dispatch) => {
    const response = await fetch(`/api/classrooms/${teacherId}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(formData),
    })

    const resJSON = await response.json();

    dispatch(setRoom(resJSON));

    return resJSON;
};

export const editRoom = (roomId, formData) => async (dispatch) => {
    const response = await fetch(`/api/classrooms/${roomId}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    });

    const resJSON = await response.json();

    dispatch(setRoom(resJSON));

    return response;
};

export const deleteRoom = (roomId) => async (dispatch) => {
    const response = await fetch(`/api/classrooms/delete/${roomId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(roomId)
    });

    dispatch(removeRoom());

    return response;
};

export const assignDeck = (roomId, deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}/assign_to_classroom/${roomId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
    });

    return response;
};

export const removeDeck = (roomId, deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}/unassign_from_classroom/${roomId}`, {method: "POST"});

    return response;
}

export const createStudents = (classroom_id, list_of_students) => async(dispatch) => {
    
    const response = await fetch('/api/students/', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            'list_of_students':list_of_students, 
            'classroom_id':classroom_id
        }),
    })

    let resJson = await response.json()
    dispatch(addStudents(resJson['list_of_students']))

    return response
}

export const editStudents = (classroom_id, list_of_students) => async(dispatch) => {
    let student_list = []
    for (let student of list_of_students) {
        const response = await fetch(`/api/students/${student.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name': student.name,
                'classroom_id': classroom_id
            })
        })
        let resJson = await response.json()
        student_list.push(resJson)
    }

    console.log('student_list', student_list)

    dispatch(changeStudents(student_list))
}


const initialState = { room: null };

const roomReducer = (state = initialState, action) => {
	let newState;

	switch (action.type) {
		case GET_ROOM:
			newState = Object.assign({}, state);
			newState.room = action.payload;
			return newState;

        case REMOVE_ROOM:
            newState = Object.assign({}, state);
            newState.room = action.payload;
            return newState;

        case ADD_STUDENTS:
            newState = Object.assign({}, state)
            newState.room.students = action.payload;
            return newState

        case EDIT_STUDENTS:
            newState = Object.assign({}, state)
            newState.room.students.map((el) => {
                let new_students = action.payload
                for (let student_edit of new_students) {
                    if (student_edit.id === el.id) {
                        el.name = student_edit.name
                    }
                }
            })
            return newState

		default:
			return state;
	}
};

export default roomReducer;
