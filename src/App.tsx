import React from 'react'
import './App.css'
import { KeyFeed } from './components/feed/feed'
import { Keyboard } from './components/keyboard/keyboard'

function App() {
  return (
    <main className='App'>
      <header className="App__header">
        <h1 className="App__title">Keycap</h1>
        <div className="App__subtitle">
          <small>The keyboard test app</small>
        </div>
      </header>

      <div className="container container_flex">
        <Keyboard />
        <KeyFeed />
      </div>

      <div className="container">
        <p>This app lets you check if all keys on your keyboard are in order.</p>
        <p>Each pressed key is highlighted with red color.</p>
      </div>

      <footer className="App__footer" />
    </main>
  )
}

export default App
