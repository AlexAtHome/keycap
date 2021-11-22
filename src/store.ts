import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import { pressedKeysReducer } from "./reducers";

export const store = configureStore({
	reducer: {
		pressedKeys: pressedKeysReducer
	},
	enhancers: defaultEnhancers => process?.env?.NODE_ENV !== 'development' ? [...defaultEnhancers] : [...defaultEnhancers, devToolsEnhancer({})]
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
