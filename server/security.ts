import { Router } from 'express'

import DEV from './dev.js'
import urlFromRequest from './url/from/request.js'
import HttpCode from '../shared/http/code.js'
import sendError from '../shared/error/send.js'

const security = Router()

security.use((req, res, next) => {
	try {
		if (DEV) return next()

		const url = urlFromRequest(req)
		if (url.protocol === 'https:') return next()

		res.redirect(
			HttpCode.PermanentRedirect,
			url.href.replace('http:', 'https:')
		)
	} catch (value) {
		sendError(res, value)
	}
})

security.use((req, res, next) => {
	try {
		res.header('access-control-allow-origin', urlFromRequest(req).origin)
		next()
	} catch (value) {
		sendError(res, value)
	}
})

export default security
