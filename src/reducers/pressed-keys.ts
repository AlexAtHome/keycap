import { createAction, createReducer } from '@reduxjs/toolkit'

type State = string[]

export const addPressedKey = createAction<string, 'pressed/add'>('pressed/add')
export const resetPressedKeys = createAction<void, 'pressed/reset'>('pressed/reset')

export const pressedKeysReducer = createReducer<State>([], builder => {
	builder
		.addCase(addPressedKey, (state, { payload }) => {
			if (!state.includes(payload)) {
				return [...state, payload]
			}
			return state
		})
		.addCase(resetPressedKeys, () => [])
})
