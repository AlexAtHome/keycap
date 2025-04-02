import { createAction, createReducer } from '@reduxjs/toolkit'

type ControllerHistroyState = number[]

export const appendControllerHistory = createAction<number, 'controller/history/append'>('controller/history/append')

export const controllerHistoryReducer = createReducer<ControllerHistroyState>([], builder => {
	builder.addCase(appendControllerHistory, (state, { payload }) => {
		return [payload, ...state]
	})
})
