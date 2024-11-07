import { KeyFeed } from './components/feed/feed'
import { Keyboard } from './components/keyboard/keyboard'

function App() {
	return (
		<main className='flex flex-col gap-12 my-8'>
			<header>
				<h1 className="text-center text-4xl mb-2 font-bold">Keycap</h1>
				<div className="text-center">
					<small>The keyboard test app</small>
				</div>
			</header>

			<div className="flex flex-col relative justify-center max-w-min mx-auto">
				<Keyboard />
				<KeyFeed />
			</div>

			<div className="max-w-7xl mx-auto">
				<p>This app lets you check if all keys on your keyboard are in order.</p>
				<p>Each pressed key is highlighted with red color.</p>
			</div>
		</main>
	)
}

export default App