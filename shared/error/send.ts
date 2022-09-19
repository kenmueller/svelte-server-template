import type { Response } from 'express'

import errorFromValue from './from/value.js'

const sendError = <Value>(res: Response, value: Value) => {
	const { code, message } = errorFromValue(value)
	res.status(code).send(message)
}

export default sendError
