import React from 'react'
import './App.css'
import { Keyboard } from './components/keyboard/keyboard'

function App() {
	return (
		<main className='App'>
			<header className="App__header">
				<h1 className="App__title">Keycap</h1>
				<div className="App__subtitle">
					<small>The keyboard tester</small>
				</div>
			</header>

			<div className="container">
				<Keyboard />
			</div>

			<footer className="App__footer" />
		</main>
	)
}

export default App
