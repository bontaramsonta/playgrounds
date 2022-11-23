import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SocketContext, socket } from './context/socket'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SocketCacheInvalidator from './components/SocketCacheInvalidator'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SocketContext.Provider value={socket}>
        <SocketCacheInvalidator>
          <App />
        </SocketCacheInvalidator>
      </SocketContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
