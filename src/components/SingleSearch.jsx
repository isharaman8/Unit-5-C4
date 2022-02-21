import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const SingleSearch = () => {
	const { id } = useParams();

	const reqItem = useSelector((store) => store.items).find((c) => c.id == id);
	if (!reqItem || !reqItem?.id) return <p>No Item Found</p>;

	return (
		<div id="detailed-result">
			<p className="title">Title: {reqItem.title}</p>
			<p className="desc">Description: {reqItem.description}</p>
			<p className="author">Author: {reqItem.author}</p>
			<p className="creation-date">Creation-Date: {reqItem["creation_date"]}</p>
			<p className="explicit">Explicit: {reqItem.explicit ? "Yes" : "No"}</p>
			<p className="quality">Quality: {reqItem.quality}</p>
		</div>
	);
};
