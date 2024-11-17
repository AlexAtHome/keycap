import { KeyFeed } from "../components/feed/feed"
import { Keyboard } from "../components/keyboard/keyboard"
import { type RootState, store } from "../store"
import { resetKeysHistory, resetPressedKeys } from "../reducers"
import { useSelector } from "react-redux"
import { Button } from "../components/button/button"
import { ArrowClockwise } from "react-bootstrap-icons"

const KeyboardPage = () => {
	return (
		<section className="flex flex-col gap-12 min-h-screen">
			<div className='flex flex-col relative'>
				<p>Pressed keys will be highlighted on the keyboard scheme below.</p>
			</div>

			<div className='flex flex-col relative justify-center max-w-min mx-auto'>
				<Keyboard />
			</div>

			<div className='flex flex-col relative'>
				<header className="flex flex-row gap-8 justify-start">
					<h2 className="font-bold text-3xl">Key history</h2>
					<KbdResetButton />
				</header>
				<KeyFeed />
			</div>
		</section>
	)
}

export default KeyboardPage

const KbdResetButton = () => {
	const hasPressedKeys = useSelector((state: RootState) => state.pressedKeys.length > 0)
	const reset = () => {
		store.dispatch(resetPressedKeys())
		store.dispatch(resetKeysHistory())
	}

	return <Button disabled={!hasPressedKeys} onClick={reset}>
		Reset
		<ArrowClockwise size="1.5em" role="presentation" />
	</Button>
}
