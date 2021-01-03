import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import StudentLoginForm from "./components/auth/StudentLoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Widgets from "./components/Widgets";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import NotFoundPage from "./components/NotFoundPage";



// import Test from './components/test'
import FullPageDiv from './components/FullPageDiv/FullPageDiv';
import Banner from './components/FullPageDiv/Banner';
import SideBar from './components/FullPageDiv/SideBar';
import Library from './components/Library/Library';
import CreateClass from './components/CreateClass/CreateClass';
import CreateDeck from './components/CreateDeck/CreateDeck';
import CreateCard from './components/CreateDeck/CardClass';
import CardCreationForm from './components/CardCreationForm';
import DeckEditForm from './components/DeckEditForm';
import DeckPreview from './components/FullPageDiv/DeckPreview'


function App() {
	const [authenticated, setAuthenticated] = useState(false);
	// const [loaded, setLoaded] = useState(false);

	//   useEffect(() => {
	//     (async() => {
	//       setLoaded(true);
	//     })();
	//   }, []);

	//   if (!loaded) {
	//     return null;
	//   }

	return (
		<BrowserRouter>
			{/* <NavBar setAuthenticated={setAuthenticated} /> */}
			<Switch>
				<Route exact path="/">
					<NavBar setAuthenticated={setAuthenticated} />
					<Widgets />
					<Footer />
				</Route>
				<Route path="/test" exact={true}>
					<DeckEditForm />
				</Route>
				<Route path="/login" exact={true}>
					<LoginForm
					// authenticated={authenticated}
					// setAuthenticated={setAuthenticated}
					/>
				</Route>
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
        <ProtectedRoute path='/teachers/:teacherId'>
			    {/* <NavBar /> */}
          <FullPageDiv />
        </ProtectedRoute>
        <Route path='/teacher/deckPreview'>
          <div class='fullPageDiv'>
            <Banner />
            <div class='bodyDiv'>
                <SideBar addToLibrary={false} addCardToDeck={false} createClass={true}/>
                <div class='mainDiv'>
                      <DeckPreview />
                </div>
            </div>
          </div>
        </Route>
        <Route path='/teacher/createClass'>
          <div class='fullPageDiv'>
            <Banner />
            <div class='bodyDiv'>
                <SideBar addToLibrary={false} addCardToDeck={false} createClass={true}/>
                <div class='mainDiv'>
                      <CreateClass />
                </div>
            </div>
          </div>
        </Route>
        <Route path='/teachers/libraries'>
          <div class='fullPageDiv'>
            <Banner />
            <div class='bodyDiv'>
                <SideBar addToLibrary={true} addCardToDeck={false} createClass={false}/>
                <div class='mainDiv'>
                      <Library />
                </div>
            </div>
          </div>
        </Route>
        <Route path='/createDeck'>
          <div class='fullPageDiv'>
            <Banner />
            <div class='bodyDiv'>
                <SideBar addToLibrary={true} addCardToDeck={false} createClass={false}/>
                <div class='mainDiv'>
                      <CreateDeck />
                </div>
            </div>
          </div>
        </Route>
        <Route path='/createCard'>
          <div class='fullPageDiv'>
            <Banner />
              <div class='bodyDiv'>
                  <SideBar addToLibrary={false} addCardToDeck={true} createClass={false}/>
                  <div class='mainDiv'>
                        <CreateCard />
                  </div>
              </div>
          </div>
        </Route>

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
