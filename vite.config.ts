import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(),
	VitePWA({
		registerType: 'autoUpdate',
		devOptions: {
			enabled: false
		},
		workbox: {
			globPatterns: ['**/*.{js,css,html}', '**/*.{ico,png,svg}']
		},
		manifest: {
			name: "Keycap",
			short_name: "Keycap",
			description: "Keyboard Testing TOol",
			theme_color: "#1e293b",
			background_color: "#1e293b",
			start_url: "/",
			display: "standalone",
			categories: [
				"productivity"
			],
			"icons": [
				{
					"src": "pwa-64x64.png",
					"sizes": "64x64",
					"type": "image/png"
				},
				{
					"src": "pwa-192x192.png",
					"sizes": "192x192",
					"type": "image/png"
				},
				{
					"src": "pwa-512x512.png",
					"sizes": "512x512",
					"type": "image/png"
				},
				{
					"src": "maskable-icon-512x512.png",
					"sizes": "512x512",
					"type": "image/png",
					"purpose": "maskable"
				}
			]
		}
	})
	],
})