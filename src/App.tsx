import React from 'react'
import './App.css'
import { Keyboard } from './components/keyboard/keyboard'

function App() {
	return (
		<main className='App'>
			<h1>Keycap</h1>
			<p>
				<small>The keyboard tester</small>
			</p>

			<Keyboard />
		</main>
	)
}

export default App
