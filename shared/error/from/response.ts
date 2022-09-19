import HttpError from '../../http/error.js'
import DEFAULT_ERROR from '../default.js'

const errorFromResponse = async (response: Response) => {
	try {
		return new HttpError(response.status, await response.text())
	} catch {
		return new HttpError(response.status, DEFAULT_ERROR)
	}
}

export default errorFromResponse
