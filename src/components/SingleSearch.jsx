import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const SingleSearch = () => {
	const { id } = useParams();

	const reqItem = useSelector((store) => store.items).find((c) => c.id == id);
	if (!reqItem || !reqItem?.id) return <p>No Item Found</p>;

	const {
		id,
		title,
		url,
		description,
		author,
		creation_date,
		explicit,
		quality,
	} = reqItem;
	return (
		<div id="detailed-result">
			<p className="title">Title: {}</p>
			<p className="desc"></p>
			<p className="author"></p>
			<p className="creation-date"></p>
			<p className="explicit"></p>
			<p className="quality"></p>
		</div>
	);
};
