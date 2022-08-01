import React from 'react'

// example token
const exmplUser = {
  userId: 'sourav',
  scope: 'user'
}

export const getAuth = async () => {
  return exmplUser
}

export const AuthContext = React.createContext({})
