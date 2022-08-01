import React from 'react'
import { SocketContext } from '../context/socket.js'
function App () {
  const socket = React.useContext(SocketContext)
  React.useEffect(() => {
    console.log('useEffect called')
    socket.emit('debug:count')

    socket.on('debug', (data) => {
      console.log('[debug]', data)
    })

    return () => {
      socket.off('debug:count')
    }
  }, [socket])
  return (
    <div>App</div>
  )
}

export default App
