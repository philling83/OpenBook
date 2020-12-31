const GET_ROOM = "classroom";
const ADD_ROOM = "classroom/add";

const setRoom = (room) => {
	return { type: GET_ROOM, payload: room };
};

const newRoom = (room) => {
	return { type: ADD_ROOM, payload: room };
};

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

    return response;
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

const initialState = { room: null };

const roomReducer = (state = initialState, action) => {
	let newState;

	switch (action.type) {
		case GET_ROOM:
			newState = Object.assign({}, state);
			newState.room = action.payload;
			return newState;

		default:
			return state;
	}
};

export default roomReducer;
