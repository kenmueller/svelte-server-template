import express from 'express'
import { type Server, createServer } from 'http'
import { Server as SocketServer } from 'socket.io'

interface WithDevServer {
	devServer?: Server
}

const { devServer } = global as WithDevServer

export const app = express()
export const server = devServer ?? createServer(app)
export const io = new SocketServer(server)
