import express from 'express'

const app = express()

app.get('/abc', (_req, res) => {
	res.send('abc')
})

app.use((req, _res, next) => {
	console.log(req.method, req.url)
	next()
})

export default app
