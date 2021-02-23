import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";

import LoginForm from "./components/auth/LoginForm";
import StudentLoginForm from "./components/auth/StudentLoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
// import NotFoundPage from "./components/NotFoundPage";
import Banner from "./components/FullPageDiv/Banner";
import SideBar from "./components/FullPageDiv/SideBar";
import CreateDeck from "./components/CreateDeck/CreateDeck";
import CreateCard from "./components/CreateDeck/CreateCard";
import TeacherHomePage from './components/FullPageDiv/TeacherHomePage';
import StudentHomePage from './components/FullPageDiv/StudentHomePage';
import CreateClass from './components/CreateClass/CreateClass';
import ViewDeck from './components/ViewDeck/ViewDeck';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<LoginForm/>
					<Footer />
				</Route>
{/*
				<ProtectedRoute path="/test" exact={true}>
					<DeckEditv2 />
				</ProtectedRoute>
				<ProtectedRoute path="/testCard" exact={true}>
					<CardCreationForm />
				</ProtectedRoute> */}

				<Route path="/login/student" exact={true}>
					<StudentLoginForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>

				<Route path="/sign-up" exact={true}>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
					<Footer />
				</Route>

				{/* <ProtectedRoute path="/users" exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId" exact={true}>
					<User />
				</ProtectedRoute>
				<ProtectedRoute path="/app" exact={true}>
					<h1>My Home Page</h1>
				</ProtectedRoute>
				<Route path="/404">
					<NotFoundPage />
				</Route> */}

				<ProtectedRoute path="/teachers/:teacherId">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								createClass
								createDeck
								createCard
								editClass
							/>
							<div className="mainDiv">
								<TeacherHomePage />
							</div>
						</div>
					</div>
				</ProtectedRoute>

				<ProtectedRoute path="/students/:studentId">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								createDeck
								createCard
								studentPage
							/>
							<div className="mainDiv">
								<StudentHomePage />
							</div>
						</div>
					</div>
				</ProtectedRoute>

				<ProtectedRoute path="/teacher/createClass">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								goHome
								createDeck
								createCard
							/>
							<div className="mainDiv">
								<CreateClass />
							</div>
						</div>
					</div>
				</ProtectedRoute>

				<ProtectedRoute path="/teacher/createDeck">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								goHome
								createClass
								createCard
								completeDeck
							/>
							<div className="mainDiv">
								<CreateDeck />
							</div>
						</div>
					</div>
				</ProtectedRoute>

				<ProtectedRoute path="/teacher/createCard">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								goHome
								createDeck
							/>
							<div className="mainDiv">
								<CreateCard />
							</div>
						</div>
					</div>
				</ProtectedRoute>

				<ProtectedRoute path="/teacher/viewDeck">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								goHome
								assignDeck
								viewDeck
								resetStudy
							/>
							<ViewDeck />
						</div>
					</div>
				</ProtectedRoute>

				<ProtectedRoute path="/student/viewDeck">
					<div className="fullPageDiv">
						<Banner />
						<div className="bodyDiv">
							<SideBar
								goHome
								viewDeck
								resetStudy
							/>
							<ViewDeck />
						</div>
					</div>
				</ProtectedRoute>

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
