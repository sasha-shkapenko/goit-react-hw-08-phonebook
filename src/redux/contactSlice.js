import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    },
    reducers: {
        addContact(state, { payload }) {
            state.items.push(payload);
        },
        deleteContact(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
            state.items = [...state.items, state.items.filter(item => item.name.toLowerCase().includes(payload))]
        },
    }
});
export const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;

