import HttpError from '../../http/error.js'
import HttpCode from '../../http/code.js'
import DEFAULT_ERROR from '../default.js'

const errorFromValue = <Value>(value: Value) =>
	value instanceof HttpError
		? value
		: new HttpError(
				HttpCode.Internal,
				value instanceof Error ? value.message : DEFAULT_ERROR
		  )

export default errorFromValue
