import { ADD_ITEM, ADD_SEARCH_ITEM, DEL_ITEM } from "./actionTypes";

export const addItem = (payload) => {
	return { type: ADD_ITEM, payload };
};

export const delItem = (payload) => {
	return { type: DEL_ITEM, payload };
};

export const addSearchItem = (payload) => {
	return { type: ADD_SEARCH_ITEM, payload };
};
