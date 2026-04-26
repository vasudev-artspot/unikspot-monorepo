import { useState, useEffect } from 'react'

import { apiClient } from '@shared/api/client'

import type { ApiResponse } from '@shared/api/types'

export function useGetUser(userId: string) {
  const [data, setData] = useState<ApiResponse<{ id: string; email: string }> | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) return
    setLoading(true)
    apiClient
      .get<ApiResponse<{ id: string; email: string }>>(`/users/${userId}`)
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [userId])

  return { data, loading, error }
}
