import { createAction, createReducer } from "@reduxjs/toolkit"

type GamepadState = {
	id: string
	name: string;
	isConnected: boolean
	hasVibration: boolean;
	buttons: number[]
	pressedButtons: boolean[];
	touchedButtons: boolean[];
	axes: number[];
}

const defaultState: GamepadState = {
	id: 'none',
	name: 'none',
	isConnected: false,
	hasVibration: false,
	buttons: [],
	pressedButtons: [],
	touchedButtons: [],
	axes: [],
}

type GamepadConnectParams = Omit<GamepadState, 'name' | 'isConnected'>

export const connectController = createAction<GamepadConnectParams, 'controller/connect'>('controller/connect')
export const disconnectController = createAction<void, 'controller/disconnect'>('controller/disconnect')
export const pressControllerKey = createAction<{ buttons?: number[], pressed?: boolean[], touched?: boolean[], axes?: number[] }, 'controller/pressKey'>('controller/pressKey')
export const resetTouchedControllerKeys = createAction<void, 'controller/resetTouched'>('controller/resetTouched')

export const controllerReducer = createReducer<GamepadState>({ ...defaultState }, builder => {
	builder
		.addCase(connectController, (state, { payload: gamepad }) => {
			if (state.id !== defaultState.id) {
				return {
					...state,
					isConnected: true
				}
			}
			const name = gamepad.id
			return {
				...gamepad,
				name,
				isConnected: true,
			}
		})
		.addCase(disconnectController, (state) => {
			return {
				...state,
				isConnected: false
			}
		})
		.addCase(pressControllerKey, (state, { payload }) => {
			if (payload.axes) {
				state = {
					...state,
					axes: [...payload.axes]
				}
			}
			if (payload.buttons) {
				state = {
					...state,
					buttons: [...payload.buttons]
				}
			}
			if (payload.pressed) {
				state = {
					...state,
					pressedButtons: [...payload.pressed]
				}
			}
			if (payload.touched) {
				state = {
					...state,
					touchedButtons: [...payload.touched]
				}
			}
			return state
		})
		.addCase(resetTouchedControllerKeys, (state) => ({
			...state,
			touchedButtons: state.touchedButtons.map(_ => false),
		}))
})
