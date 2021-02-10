import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { login } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";
import StudentLoginForm from "./StudentLoginForm";

import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";

const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeInLeftDiv = styled.div`
  animation: 3s ${FadeInLeftAnimation};
`;

const FadeInRightAnimation = keyframes`${fadeInRight}`;
const FadeInRightDiv = styled.div`
  animation: 3s ${FadeInRightAnimation};
`;

const LoginForm = () => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const currentUser = useSelector((state) => state.session.user);

	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		return dispatch(sessionActions.login({ email, password }));
	};

	const demoTeacher = (e) => {
    e.preventDefault();
		return dispatch(sessionActions.login({
			email: "demo@aa.io",
			password: "password",
		}));
	};

	useEffect(() => {}, [dispatch]);

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (currentUser) {
		return <Redirect to={`/teachers/${currentUser.id}`} />;
	}

	return (
		<>
			<div className="login-banner">
				<a href="/">
					<img
						className="logo-image"
						src={require("../../Assets/logo.png")}
						alt=""
					></img>
				</a>
			</div>
			<div className="login-container">
				<FadeInLeftDiv>
					<div className="teacher-login">
						<div className="teacher-header">
							<h1>Teachers</h1>
							<h2>Log In</h2>
						</div>
						<div className="teacher-login-form-container">
							<form onSubmit={onLogin}>
								<div>
									{errors.map((error) => (
										<div>{error}</div>
									))}
								</div>
								<div className="teacher-form-label">
									<input
										className="teacher-input"
										name="email"
										type="text"
										placeholder="Email"
										value={email}
										onChange={updateEmail}
									/>
								</div>
								<div className="teacher-form-label">
									<input
										className="teacher-input"
										name="password"
										type="password"
										placeholder="Password"
										value={password}
										onChange={updatePassword}
									/>
								</div>
								<div className="submit">
									<button className="submit-button" type="submit">
										Login
									</button>
								</div>
								<div className="submit">
									<button onClick={demoTeacher} className="submit-button">
										Demo Teacher
									</button>
								</div>
							</form>
						</div>
						<p className="teacher-footer">
							Don't have an account?
							<a href="/sign-up" className="sign-up-link">
								{" "}
								Sign up
							</a>
						</p>
					</div>
				</FadeInLeftDiv>
				<FadeInRightDiv>
					<div className="student-login">
						<div className="student-header">
							<h1>Students</h1>
							<h2>Join a Class</h2>
						</div>
						<StudentLoginForm />
					</div>
				</FadeInRightDiv>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default LoginForm;
