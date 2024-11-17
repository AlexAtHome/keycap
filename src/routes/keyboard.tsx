import { KeyFeed } from "../components/feed/feed"
import { Keyboard } from "../components/keyboard/keyboard"
import { ResetButton } from "../components/reset-button/reset-button"

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
					<ResetButton />
				</header>
				<KeyFeed />
			</div>
		</section>
	)
}

export default KeyboardPage
