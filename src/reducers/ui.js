import { SET_ACTIVE_ITEM } from '../actions/uiActions';

const initialState = {
	activeListItemId: null
}

export default function uiReducer(state = initialState, action) {
	switch(action.type) {
		case SET_ACTIVE_ITEM:
			return {...state, activeListItemId: action.payload};
		default:
			return state;
	}
}