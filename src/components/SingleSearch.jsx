import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/singlesearch.scss";
import { Navbar } from "./Navbar";

export const SingleSearch = () => {
	const { id } = useParams();

	const reqItem = useSelector((store) => store.items).find((c) => c.id == id);
	if (!reqItem || !reqItem?.id) return <p>No Item Found</p>;

	return (
		<>
			<Navbar />
			<div id="detailed-result">
				<h2 className="title">Title: {reqItem.title}</h2>
				<p className="desc"> {reqItem.description}</p>
				<p className="author"> {reqItem.author}</p>
				<p className="creation-date"> {reqItem["creation_date"]}</p>
				<p className="explicit">{reqItem.explicit ? "Yes" : "No"}</p>
				<p className="quality"> {reqItem.quality}</p>
			</div>
		</>
	);
};
