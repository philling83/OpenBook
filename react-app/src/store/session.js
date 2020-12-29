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

export const login = (user) => async (dispatch) => {
	const { email, password } = user;

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
	// return await response.json();
	let userJson = await response.json()
	dispatch(setUser(userJson));
	return response;
};


export const logout = () => async (dispatch) => {
	const response = await fetch("/auth/logout", {
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
