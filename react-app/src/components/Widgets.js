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
				<FadeInDownDiv>
					{/* <div className="student-content">
          <h3>You'll wonder how you learned without it</h3>
        </div> */}
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
								<form className="full-name" onSubmit={studentLogin}>
									<input
										value={name}
										type="text"
										placeholder="Enter Full Name"
										onChange={(e) => setName(e.target.value)}
									/>

									<input
										value={password}
										type="password"
										placeholder="Enter Password"
										onChange={(e) => setPassword(e.target.value)}
									/>

                  <button hidden type="submit"></button>
								</form>
							</div>
						</div>
						<div className="teacher-widget">
							<h2 className="teacher-title">TEACHERS</h2>
							<a href="/sign-up">
								<button className="signup-button">Sign up for FREE</button>
							</a>
							<p>
								<a>or </a>
								<a href="/login">Login</a>
							</p>
						</div>
					</div>
				</FadeInDownDiv>
			</div>
		</>
	);
};

export default Widgets;
