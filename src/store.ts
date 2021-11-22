import { configureStore } from "@reduxjs/toolkit";
import { pressedKeysReducer } from "./reducers";

export const store = configureStore({
	reducer: {
		pressedKeysReducer
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
