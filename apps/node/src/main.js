import { Server } from 'socket.io'

const io = new Server({
  transports: ['websocket'],
  serveClient: false,
})

io.on('connection', onConnection)

function onConnection(socket) {
  console.log('[connected]', socket.id, socket.handshake?.auth?.userId)
  socket.once('disconnect', () => {
    console.log('[disconnected]', socket.handshake?.auth?.userId)
  })
}

io.listen(3000)