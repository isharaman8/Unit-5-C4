import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "../store/store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ReduxProvider store={store}>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
