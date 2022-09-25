/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { Server } from 'http'
import type { Plugin, UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

interface WithDevServer {
	devServer?: Server
}

const server: Plugin = {
	name: 'server',
	configureServer: async server => {
		;(global as WithDevServer).devServer = server.httpServer as Server
		server.middlewares.use((await import('./server/app.js')).default)
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
