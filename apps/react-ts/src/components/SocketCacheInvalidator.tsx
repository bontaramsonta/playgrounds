import React, { useCallback, useContext, useEffect } from 'react'
import { SocketContext } from 'context/socket'
import { useQueryClient } from '@tanstack/react-query'

function SocketCacheInvalidator({ children }: { children: React.ReactNode[] | React.ReactNode }) {
  const queryClient = useQueryClient()
  const socket = useContext(SocketContext)

  const handleSocketConnect = useCallback(() => {
    console.log('[socket connected]')
    socket.on('invalidate', (payload) => {
      console.log('[invalidate]', payload)
    })
  }, [])

  const handleSocketDisconnect = useCallback(() => {
    console.log('[socket disconnected]')

  }, [])
  useEffect(() => {
    console.log('[cache invalidator]')
    socket.on('connect', handleSocketConnect)
    socket.on('disconnect', handleSocketDisconnect)
    return () => {
      console.log('[cache invalidator cleanup]')
      socket.removeAllListeners('connect')
      socket.removeAllListeners('disconnect')
      socket.removeAllListeners('invalidate')
      console.log('[socket listeners after cleanup]', socket.listenersAny.length)
    }
  }, [handleSocketConnect, handleSocketDisconnect])
  return children
}

export default SocketCacheInvalidator