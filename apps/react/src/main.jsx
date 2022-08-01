import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocketContext, socket } from './context/socket.js'
import App from './components/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>
)
