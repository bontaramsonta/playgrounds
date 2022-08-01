import socketio from 'socket.io-client'
import React from 'react'

export const socket = socketio('http://localhost:3000', {
  transports: ['websocket'],
  auth: {
    userId: 'sourav'
  }
})
export const SocketContext = React.createContext()
