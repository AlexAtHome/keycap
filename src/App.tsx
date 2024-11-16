import { KeyFeed } from './components/feed/feed'
import { Keyboard } from './components/keyboard/keyboard'
import { ResetButton } from './components/reset-button/reset-button'

function App() {
	return (
		<main className='flex flex-col gap-12 my-8'>
			<header className='flex flex-col relative w-full lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto px-4'>
				<h1 className='text-4xl mb-2 font-bold'>Keycap</h1>
				<div>
					<small>The keyboard test app</small>
				</div>
			</header>

			<div className='flex flex-col relative justify-center max-w-min mx-auto'>
				<Keyboard />
			</div>

			<div className='flex flex-col relative w-full lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto px-4'>
				<header className="flex flex-row gap-8 justify-start">
					<h2 className="font-bold text-3xl">Key history</h2>
					<ResetButton />
				</header>
				<KeyFeed />
			</div>
		</main>
	)
}

export default App
