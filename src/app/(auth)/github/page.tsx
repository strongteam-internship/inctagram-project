'use client'

import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

export default function GithubPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const userEmail = params.get('email')
    const token = params.get('accessToken')

    if (token) {
      localStorage.setItem('token', token as string)
      router.push('/profile')
    } else {
      setLoading(false)
    }
  }, [router])

  return <>{loading && <p style={{ color: 'white' }}>Loading...</p>}</>
}
