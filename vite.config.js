/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { sveltekit } from '@sveltejs/kit/vite'

import app from './server/app'

/** @type {import('vite').Plugin} */
const server = {
	name: 'server',
	configureServer: server => {
		server.middlewares.use(app)
	}
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [server, sveltekit()],
	server: {
		fs: {
			allow: ['.']
		}
	},
	build: {
		assetsInlineLimit: 0
	}
}

export default config
