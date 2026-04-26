import React, { createContext, useState, useCallback } from 'react'

import type { User, AuthState } from '@shared/auth/types'

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: Readonly<{ children: Readonly<React.ReactNode> }>) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isLoading: false,
    isAuthenticated: false,
  })

  const login = useCallback(async (email: string, _password: string) => {
    setState(s => ({ ...s, isLoading: true }))
    // Replace with your real API call
    await new Promise(r => setTimeout(r, 500))
    const mockUser: User = { id: '1', email, name: 'Test User', role: 'user' }
    setState({ user: mockUser, token: 'mock-token', isLoading: false, isAuthenticated: true })
  }, [])

  const logout = useCallback(() => {
    setState({ user: null, token: null, isLoading: false, isAuthenticated: false })
  }, [])

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
}
