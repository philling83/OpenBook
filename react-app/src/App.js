import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import StudentLoginForm from "./components/auth/StudentLoginForm";
import SignUpForm from "./components/auth/SignUpForm";
// import NavBar from "./components/NavBar";
// import Widgets from "./components/Widgets";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import NotFoundPage from "./components/NotFoundPage";
import DeckEditv2 from "./components/DeckEditv2";
import FullPageDiv from "./components/FullPageDiv/FullPageDiv";
import Banner from "./components/FullPageDiv/Banner";
import SideBar from "./components/FullPageDiv/SideBar";
import Library from "./components/Library/Library";
import CreateDeck from "./components/CreateDeck/CreateDeck";
import CreateCard from "./components/CreateDeck/CardClass";
import ClassContainer from "./components/CreateClass/ClassContainer";
import CardCreationForm from "./components/CardCreationForm";
import DeckPreview from "./components/FullPageDiv/DeckPreview";
import { authenticate } from "./store/session";

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
			{/* <NavBar setAuthenticated={setAuthenticated} /> */}
			<Switch>
				<Route exact path="/">
					<LoginForm
					// authenticated={authenticated}
					// setAuthenticated={setAuthenticated}
					/>
					<Footer />
				</Route>
				<ProtectedRoute path="/test" exact={true}>
					<DeckEditv2 />
				</ProtectedRoute>
				<ProtectedRoute path="/testCard" exact={true}>
					<CardCreationForm />
				</ProtectedRoute>
				{/* <Route path="/login" exact={true}>
					<LoginForm
					// authenticated={authenticated}
					// setAuthenticated={setAuthenticated}
					/>
				</Route> */}
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
				<ProtectedRoute path="/users" exact={true}>
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
				</Route>
				<ProtectedRoute path="/teachers/:teacherId">
					{/* <NavBar /> */}
					<FullPageDiv />
				</ProtectedRoute>
				<ProtectedRoute path="/teacher/deckPreview">
					<div class="fullPageDiv">
						<Banner />
						<div class="bodyDiv">
							<SideBar
								addToLibrary={false}
								addCardToDeck={false}
								createClass={true}
							/>
							<div class="mainDiv">
								<DeckPreview />
							</div>
						</div>
					</div>
				</ProtectedRoute>
				<ProtectedRoute path="/teacher/createClass">
					<div class="fullPageDiv">
						<Banner />
						<div class="bodyDiv">
							<SideBar
								addToLibrary={false}
								addCardToDeck={false}
								createClass={true}
							/>
							<div class="mainDiv">
								<ClassContainer />
							</div>
						</div>
					</div>
				</ProtectedRoute>
				<ProtectedRoute path="/teachers/libraries">
					<div class="fullPageDiv">
						<Banner />
						<div class="bodyDiv">
							<SideBar
								addToLibrary={true}
								addCardToDeck={false}
								createClass={false}
							/>
							<div class="mainDiv">
								<Library />
							</div>
						</div>
					</div>
				</ProtectedRoute>
				<ProtectedRoute path="/createDeck">
					<div class="fullPageDiv">
						<Banner />
						<div class="bodyDiv">
							<SideBar
								addToLibrary={true}
								addCardToDeck={false}
								createClass={false}
							/>
							<div class="mainDiv">
								<CreateDeck />
							</div>
						</div>
					</div>
				</ProtectedRoute>
				<ProtectedRoute path="/createCard">
					<div class="fullPageDiv">
						<Banner />
						<div class="bodyDiv">
							<SideBar
								addToLibrary={false}
								addCardToDeck={true}
								createClass={false}
							/>
							<div class="mainDiv">
								<CreateCard />
							</div>
						</div>
					</div>
				</ProtectedRoute>

				{/* <Route path='/teachers/:teacherId/cards'>
          <div class='fullPageDiv'>
                  <Banner />
                  <div class='bodyDiv'>
                      <SideBar />
                      <div class='mainDiv'>
                            < />
                      </div>
                  </div>
          </div>
        </Route> */}

				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
