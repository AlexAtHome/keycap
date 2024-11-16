import { ArrowClockwise } from 'react-bootstrap-icons'
import { RootState, store } from '../../store'
import { resetPressedKeys } from '../../reducers'
import { useSelector } from 'react-redux'
import { resetKeysHistory } from '../../reducers/keys-history'

export const ResetButton = () => {
	const hasPressedKeys = useSelector((state: RootState) => state.pressedKeys.length > 0)
	const reset = () => {
		store.dispatch(resetPressedKeys())
		store.dispatch(resetKeysHistory())
	}

	return (
		<button type='button' className='inline-flex flex-row gap-4 items-center justify-items-center dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-zinc-200 hover:bg-zinc-300 py-1 px-4 rounded-lg dark:text-gray-300 text-gray-800 leading-8 text-center cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none dark:disabled:bg-zinc-900 disabled:bg-zinc-50 disabled:text-zinc-300 dark:disabled:text-zinc-600' disabled={!hasPressedKeys} onClick={reset}>
			Reset
			<ArrowClockwise size="1.5em" role="presentation" />
		</button>
	)
}
