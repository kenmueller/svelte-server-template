import PORT from './port.js'
import { server } from './root.js'
import app from './app.js'
import security from './security.js'

// @ts-ignore
import { handler } from '../../build/handler.js'

app.set('trust proxy', 1)
app.disable('x-powered-by')

app.use(security)
app.use(handler)

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
