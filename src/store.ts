import { configureStore } from '@reduxjs/toolkit'
import { pressedKeysReducer, activeKeysReducer, controllerReducer } from './reducers'
import { keysHistoryReducer } from './reducers/keys-history'

export const store = configureStore({
	reducer: {
		pressedKeys: pressedKeysReducer,
		activeKeys: activeKeysReducer,
		keysHistory: keysHistoryReducer,
		controller: controllerReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
