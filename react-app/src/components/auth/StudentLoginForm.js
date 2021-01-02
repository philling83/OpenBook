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
		return dispatch(sessionActions.student_login({ name, password }));
	};

	const updateName = (e) => {
		setName(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (currentUser) return <Redirect to="/" />;

	return (
		<>
			<div className="student-login-form-container">
				<form onSubmit={onLogin}>
					<div className="student-form-label">
						<label htmlFor="name"></label>
						<input
							className="student-form-input"
							name="name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={updateName}
						/>
					</div>
					<div className="student-form-label">
						<label htmlFor="password"></label>
						<input
							className="student-form-input"
							name="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={updatePassword}
						/>
					</div>
					<div className="join-class">
						<button className="join-class-button" type="submit">Join Class</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default StudentLoginForm;
