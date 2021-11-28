import { configureStore } from "@reduxjs/toolkit";
import { pressedKeysReducer, activeKeysReducer } from "./reducers";

export const store = configureStore({
	reducer: {
		pressedKeys: pressedKeysReducer,
		activeKeys: activeKeysReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
