import React from 'react'
import './App.css'
import {KeyboardPage} from './pages/keyboard'

const App: React.FC = () => {
	return (
		<main className='App'>
			<header className="App__header">
				<h1 className="App__title">Keycap</h1>
				<div className="App__subtitle">
					<small>The keyboard test app</small>
				</div>
			</header>

			<KeyboardPage />

			<div className="container">
				<p>This app lets you check if all keys on your keyboard are in order.</p>
				<p>Each pressed key is highlighted with red color.</p>
			</div>

			<footer className="App__footer" />
		</main>
	)
}

export default App
