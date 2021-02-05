import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../store/session";
import "./Widgets.css";

import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInDownDiv = styled.div`
	animation: 3s ${fadeInDownAnimation};
`;

const Widgets = () => {
	const currentUser = useSelector((state) => state.session.user);
	const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  if (currentUser) return <Redirect to={`/teachers/${currentUser.id}`} />;

  const studentLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.student_login({ name, password }))
  };

	return (
		<>
			<div className="splash-container">
				<FadeInDownDiv className='splash-container_content'>
					<div className="teacher-content">
						<h3>OpenBook</h3>
					</div>
					<div className="widgets">
						<div className="student-widget">
							<div className="student-widget_title">
								<h2 className="student-widget_title-p">STUDENTS</h2>
							</div>
							<div>
								<p>Join a lesson</p>
							</div>
							<div>
								<form className="student-login_form" onSubmit={studentLogin}>
									<input
										className="student-form_input"
										value={name}
										type="text"
										placeholder="Enter FULL NAME"
										onChange={(e) => setName(e.target.value)}
									/>

									<input
										className="student-form_input"
										value={password}
										type="password"
										placeholder="Enter CODE"
										onChange={(e) => setPassword(e.target.value)}
									/>
									<div>
                  						<button className="student-form_submit" type="submit">JOIN</button>
									</div>
								</form>
							</div>
						</div>
						<div className="teacher-widget">
							<div className="teacher-title_div">
								<h2 className="teacher-title">TEACHERS</h2>
							</div>
							<div className="teacher-signup_div">
								<a href="/sign-up">
									<button className="signup-button">Sign up for FREE</button>
								</a>
							</div>
							<div className="teacher-login_div">
								<p>
									<a>or </a>
									<a href="/login">Login</a>
								</p>
							</div>
						</div>
					</div>
				</FadeInDownDiv>
			</div>
		</>
	);
};

export default Widgets;
