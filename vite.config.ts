/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { Plugin, UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

import app from './server/app.js'

const server: Plugin = {
	name: 'server',
	configureServer: server => {
		server.middlewares.use(app)
	}
}

const config: UserConfig = {
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
