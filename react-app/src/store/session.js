const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
	return {
		type: SET_USER,
		payload: user,
	};
};

export const removeUser = () => {
	return {
		type: REMOVE_USER,
	};
};

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const resJSON = await response.json();
	if (Object.keys(resJSON).includes("errors")) return response;
	dispatch(setUser(resJSON));
	return response;
};


export const login = (user) => async (dispatch) => {
	const { email, password } = user;
	console.log(email, password)
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	let userJson = await response.json()
	if (Object.keys(userJson).includes("errors")) return response;
	dispatch(setUser(userJson));
	return response;
};

export const student_login = (student) => async (dispatch) => {
	const {name, password} = student;

	const response = await fetch("/api/auth/login/student", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({name, password})
	});

	let studentJson = await response.json();

	dispatch(setUser(studentJson));
}


export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	dispatch(removeUser());
	return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case SET_USER:
			newState = Object.assign({}, state);
			newState.user = action.payload;
			return newState;
		case REMOVE_USER:
			newState = Object.assign({}, state);
			newState.user = null;
			return newState;
		default:
			return state;
	}
};

export default sessionReducer;
