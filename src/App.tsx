import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import './App.css'
import { KeyboardPage } from './pages/keyboard'
import { GamepadPage } from './pages/gamepad'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<main className='App'>
				<header className='App__header'>
					<h1 className='App__title'>Keycap</h1>
					<div className='App__subtitle'>
						<small>The keyboard test app</small>
					</div>
					<nav>
						<ul>
							<li><Link to="/">Keyboard test</Link></li>
							<li><Link to="/gamepad">Gamepad test</Link></li>
						</ul>
					</nav>
				</header>

				<Routes>
					<Route path='/' element={<KeyboardPage/>} />
					<Route path='gamepad' element={<GamepadPage />} />
				</Routes>

				<div className='container'>
					<p>This app lets you check if all keys on your keyboard are in order.</p>
					<p>Each pressed key is highlighted with red color.</p>
				</div>

				<footer className='App__footer' />
			</main>
		</BrowserRouter>
	)
}

export default App
