import type { Request } from 'express'

import PORT from '../../port.js'

const urlFromRequest = (req: Request) =>
	new URL(
		req.url,
		`${req.protocol}://${req.header('host') || `${req.hostname}:${PORT}`}`
	)

export default urlFromRequest
