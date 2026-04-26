import React from 'react'

import { useAuth } from '@shared/auth/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ProtectedRoute({ children, fallback }: Readonly<ProtectedRouteProps>) {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading) return <div className="flex items-center justify-center p-8">Loading...</div>
  if (!isAuthenticated)
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="p-8 text-center text-gray-500">Please log in to continue.</div>
    )
  return <>{children}</>
}
