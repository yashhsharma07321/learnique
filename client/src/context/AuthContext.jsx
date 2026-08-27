import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/profile', {
        credentials: 'include',
      })
      const data = await response.json()
      
      if (response.ok && data.token) {
        const decoded = jwtDecode(data.token)
        setIsAuthenticated(true)
        setUser(decoded)
      } else {
        setIsAuthenticated(false)
        setUser(null)
      }
    } catch (error) {
      setIsAuthenticated(false)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials) => {
    const response = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(credentials),
    })
    
    const data = await response.json()
    
    if (response.ok) {
      const decoded = jwtDecode(data.token)
      setIsAuthenticated(true)
      setUser(decoded)
      return { success: true }
    }
    
    return { success: false, message: data.message }
  }

  const logout = async () => {
    await fetch('http://localhost:5000/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
    })
    setIsAuthenticated(false)
    setUser(null)
  }

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    checkAuth,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
