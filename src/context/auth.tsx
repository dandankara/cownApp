import React,{createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [user, setUser] = useState({
    nome: 'Daniel Test'
  })

  async function signUp(name, email, password) {
    console.log('email', email)
    // fazer um try e catch para cadastrar usuários
  }

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider