import type HttpCode from './code.js'

export default class HttpError extends Error {
	constructor(public code: HttpCode, message: string) {
		super(message)
	}
}
