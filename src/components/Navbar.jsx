import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addSearchItem } from "../../store/actions";

export const Navbar = () => {
	const [ninput, setnInput] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInput = () => {
		fetch(`https://fast-reef-22226.herokuapp.com/data?q=${ninput}`)
			.then((api) => api.json())
			.then((data) => {
				dispatch(addSearchItem(data));
				navigate(`/search?q=${ninput}`);
			});
	};
	return (
		<div id="navbar">
			<input
				onKeyPress={(e) => e.key === "Enter" && handleInput()}
				onChange={(e) => {
					setnInput(e.target.value);
				}}
				type="text"
				className="search-box"
				placeholder="Search Google"
			/>
			<button
				onClick={() => {
					handleInput();
				}}
				className="search"
			>
				Search
			</button>
		</div>
	);
};
