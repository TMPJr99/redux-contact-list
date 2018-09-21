import { ADD_CONTACT, REMOVE_CONTACT, FETCH_CONTACTS, EDIT_CONTACT } from './contactActions'

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return [...action.payload];
        case ADD_CONTACT:
            return [...state, action.payload];
        case REMOVE_CONTACT:
            return state.filter(contact => contact.id !== action.payload);
        case EDIT_CONTACT:
            return state.filter(contact => contact.id === action.payload)
        default:
            return state;
    }
}