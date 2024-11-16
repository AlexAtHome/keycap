import { createAction, createReducer } from '@reduxjs/toolkit'
import { take } from 'lodash-es'
import { IKey } from '../components/keyboard/keys.interface'
import { keycapsMap } from '../components/keyboard/keys.map'

type State = IKey[]

export const appendKeysHistory = createAction<string, 'history/append'>('history/append')

export const keysHistoryReducer = createReducer<State>([], builder => {
	builder.addCase(appendKeysHistory, (state, { payload }) => {
		const key = keycapsMap.get(payload) ?? {
			code: payload,
			label: payload,
		}
		return [key, ...take(state, 14)]
	})
})
