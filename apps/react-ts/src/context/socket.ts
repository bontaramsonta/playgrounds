import socketio from 'socket.io-client'
import React from 'react'
export const socket = socketio('http://localhost:3000', {
  transports: ['websocket'],
  auth: {
    userId: localStorage.getItem('userId') || 'baaz'
  }
})

socket.on('connect',()=>{
  console.log('[socket connected]')
})
socket.on('disconnect',()=>{
  console.log('[socket disconnected]')
})

export const SocketContext = React.createContext(socket)