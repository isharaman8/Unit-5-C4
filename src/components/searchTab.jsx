import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSearchItem } from "../../store/actions";

export const SearchTab = () => {
	const [ninput, setnInput] = useState("");
	// const items = useSelector((store) => store.items);
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
		<>
			<h1>Google</h1>
			<input
				onKeyPress={(e) => {
					e.key === "Enter" && handleInput();
				}}
				onInput={(e) => {
					setnInput(e.target.value);
				}}
				type="text"
				placeholder="Search Google"
				className="search-box"
			/>
		</>
	);
};
