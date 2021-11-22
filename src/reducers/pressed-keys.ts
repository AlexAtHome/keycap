import { createAction, createReducer } from "@reduxjs/toolkit";

type State = string[];

export const addPressedKey = createAction<string, 'add'>('add');
export const resetPressedKeys = createAction<void, 'reset'>('reset')

export const pressedKeysReducer = createReducer<State>([], builder => {
	builder
		.addCase(addPressedKey, (state, { payload }) => {
			if (!state.includes(payload)) {
				state.push(payload)
			}
		})
		.addCase(resetPressedKeys, () => {
			return []
		})
})
