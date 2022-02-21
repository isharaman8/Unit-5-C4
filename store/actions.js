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

export const addItem = (payload) => {
	return { type: ADD_ITEM, payload };
};

export const delItem = (payload) => {
	return { type: DEL_ITEM, payload };
};

export const addSearchItem = (payload) => {
	return { type: ADD_SEARCH_ITEM, payload };
};

export const sortTitleAsc = () => {
	return { type: SORT_BY_TITLE_ASC };
};

export const sortTitleDesc = () => {
	return { type: SORT_BY_TITLE_DESC };
};

export const sortDateAsc = () => {
	return { type: SORT_BY_DATE_ASC };
};

export const sortDateDesc = () => {
	return { type: SORT_BY_DATE_DESC };
};

export const sortQualityAsc = () => {
	return { type: SORT_BY_QUALITY_ASC };
};

export const sortQualityDesc = () => {
	return { type: SORT_BY_QUALITY_DESC };
};

export const filterExplicit = () => {
	return { type: FILTER_EXPLICIT };
};
