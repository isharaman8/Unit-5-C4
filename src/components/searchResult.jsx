import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	filterExplicit,
	sortDateAsc,
	sortDateDesc,
	sortQualityAsc,
	sortQualityDesc,
	sortTitleAsc,
	sortTitleDesc,
} from "../../store/actions";
import { Navbar } from "./Navbar";

export const SearchResult = () => {
	const nitems = useSelector(
		(store) => store.items,
		() => false
	);
	const dispatch = useDispatch();
	console.log(nitems);
	return (
		<>
			<Navbar />
			<div id="searchButtons">
				<button
					onClick={() => dispatch(sortTitleAsc())}
					id="sort-alphabetically"
				>
					Sort A-Z
				</button>
				<button
					onClick={() => dispatch(sortTitleDesc())}
					id="sort-alphabetically-desc"
				>
					Sort Z-A
				</button>
				<button onClick={() => dispatch(sortDateAsc())} id="sort-by-date">
					Sort by Date (Asc)
				</button>
				<button onClick={() => dispatch(sortDateDesc())} id="sort-by-date-desc">
					Sort by Date (Desc)
				</button>
				<button onClick={() => dispatch(sortQualityAsc())} id="sort-by-quality">
					Sort by Quality (Asc)
				</button>
				<button
					onClick={() => dispatch(sortQualityDesc())}
					id="sort-by-quality-desc"
				>
					Sort by Quality (Desc)
				</button>
				<button onClick={() => dispatch(filterExplicit())} id="filter-explicit">
					Filter Explicit
				</button>
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

					const date = new Date(Number(creation_date));

					return (
						<div className="result" key={id}>
							<a href={url}>{url}</a>
							<p>
								<Link to={`/page/${id}`}>{title}</Link> | {author}
							</p>
							<p>{description}</p>
							<p>Creation Date: {date.toDateString()}</p>
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
