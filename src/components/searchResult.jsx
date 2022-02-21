import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

export const SearchResult = () => {
	const location = useLocation();
	const nitems = useSelector((store) => store.items);
	console.log(nitems);
	return (
		<>
			<Navbar />
			<div id="searchButtons">
				<button id="sort-alphabetically">Sort A-Z</button>
				<button id="sort-alphabetically-desc">Sort Z-A</button>
				<button id="sort-by-date">Sort by Date (Asc)</button>
				<button id="sort-by-date-desc">Sort by Date (Desc)</button>
				<button id="sort-by-quality">Sort by Quality (Asc)</button>
				<button id="sort-by-quality-desc">Sort by Quality (Desc)</button>
				<button id="filter-explicit">Filter Explicit</button>
			</div>
			<div id="search-result">
				{nitems.map((oneItem) => {
					const {
						id,
						title,
						url,
						description,
						author,
						creation_date,
						explicit,
						quality,
					} = oneItem;
					return (
						<div className="result" key={id}>
							<a href={url}>{url}</a>
							<p>
								<Link to={`/page/${id}`}>{title}</Link> | {author}
							</p>
							<p>{description}</p>
							<p>Creation Date: {creation_date}</p>
							<p>
								Explicit: {explicit ? "Yes" : "No"} Quality %: {quality}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
