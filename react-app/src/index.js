import React from "react";
// import {BrowserRouter} from "react-router-dom"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";

//{session: {…}, cards: {…}, deck: {…}, classroom: {…}}
// cards: {cards: null}
// classroom: {room: null}
// deck: {deck: null, decks: null}
// session: {user: null}
// __proto__: Object

const preloadedState = {

	deck: {deck: {cards: []}, decks: null}
}

const store = configureStore(preloadedState);

function Root() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById("root")
);
