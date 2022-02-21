import { ADD_ITEM, ADD_SEARCH_ITEM, DEL_ITEM } from "./actionTypes";

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
		default:
			return { ...state };
	}
};
