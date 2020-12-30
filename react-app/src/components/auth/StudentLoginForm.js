import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

const StudentLoginForm = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const currentUser = useSelector((state) => state.session.user);

	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		console.log("click");

		// // TODO: handle student redux
		// return dispatch();
	};

	const updateName = (e) => {
		setName(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (currentUser) return <Redirect to="/" />;

	return (
		<form onSubmit={onLogin}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					name="name"
					type="text"
					placeholder="Name"
					value={name}
					onChange={updateName}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={password}
					onChange={updatePassword}
				/>
				<button type="submit">Join Class</button>
			</div>
		</form>
	);
};

export default StudentLoginForm;
