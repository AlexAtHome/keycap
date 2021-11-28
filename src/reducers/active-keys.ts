import { createAction, createReducer } from "@reduxjs/toolkit"

type State = string[]

export const addActiveKey = createAction<string, 'active/add'>('active/add')
export const removeActiveKey = createAction<string, 'active/remove'>('active/remove')

export const activeKeysReducer = createReducer<State>([], builder =>
	builder.addCase(addActiveKey, (state, { payload }) => {
		if (!state.includes(payload)) {
			state.push(payload)
		}
	}).addCase(removeActiveKey, (state, { payload }) => {
		const index = state.findIndex(key => key === payload);
		state.splice(index, 1);
	})
)
