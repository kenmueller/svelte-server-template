import PORT from './port.js'
import app from './app.js'

// @ts-ignore
import { handler } from '../build/handler.js'

app.set('trust proxy', 1)
app.disable('x-powered-by')

app.use(handler)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})