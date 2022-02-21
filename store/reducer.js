import {
	ADD_ITEM,
	ADD_SEARCH_ITEM,
	DEL_ITEM,
	FILTER_EXPLICIT,
	SORT_BY_DATE_ASC,
	SORT_BY_DATE_DESC,
	SORT_BY_QUALITY_ASC,
	SORT_BY_QUALITY_DESC,
	SORT_BY_TITLE_ASC,
	SORT_BY_TITLE_DESC,
} from "./actionTypes";

const init = {
	items: [],
};

export const reducer = (state = init, { payload, type }) => {
	switch (type) {
		case ADD_ITEM:
			return { ...state, items: [...state.items, payload] };

		case DEL_ITEM:
			const filteredArr = state.items.filter((c) => c.id !== payload);
			return { ...state, items: filteredArr };

		case ADD_SEARCH_ITEM:
			return { ...state, items: payload };

		case SORT_BY_TITLE_ASC:
			const sortedArray = state.items.sort((a, b) =>
				a.title > b.title ? 1 : -1
			);
			return { ...state, items: sortedArray };

		case SORT_BY_TITLE_DESC:
			const sortedArray1 = state.items.sort((a, b) =>
				a.title < b.title ? 1 : -1
			);
			return { ...state, items: sortedArray1 };

		case SORT_BY_DATE_ASC:
			const sortedArray2 = state.items.sort(
				(a, b) => Number(a.creation_date) - Number(b.creation_date)
			);
			console.log(sortedArray2);
			return { ...state, items: sortedArray2 };

		case SORT_BY_DATE_DESC:
			const sortedArray3 = state.items.sort(
				(a, b) => Number(b.creation_date) - Number(a.creation_date)
			);
			console.log(sortedArray3);
			return { ...state, items: sortedArray3 };

		case SORT_BY_QUALITY_ASC:
			const sortedArray4 = state.items.sort(
				(a, b) => Number(a.quality) - Number(b.quality)
			);

			return { ...state, items: sortedArray4 };

		case SORT_BY_QUALITY_DESC:
			const sortedArray5 = state.items.sort(
				(a, b) => Number(b.quality) - Number(a.quality)
			);
			return { ...state, items: sortedArray5 };

		case FILTER_EXPLICIT:
			const filteredArr1 = state.items.filter((c) => c.explicit == false);
			return { ...state, items: filteredArr1 };

		default:
			return { ...state };
	}
};
