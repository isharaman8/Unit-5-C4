import { Route, Routes } from "react-router-dom";
import { SearchResult } from "./components/searchResult";
import { SearchTab } from "./components/searchTab";
import { SingleSearch } from "./components/SingleSearch";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<SearchTab />}></Route>
				<Route path="/search" element={<SearchResult />}></Route>
				<Route path="/page/:id" element={<SingleSearch />}></Route>
			</Routes>
		</div>
	);
}

export default App;
