import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import Root from './Root'
import reportWebVitals from './reportWebVitals'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/error-page'
import KeyboardPage from './routes/keyboard'
import DevicePage from './routes/device'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <KeyboardPage />,
			},
			{
				path: '/game-controller',
				element: <DevicePage />,
			}
		]
	}
])

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
