'use client'

import { useState, useEffect } from 'react'

const BASE_COUNT = 8_247
const STORAGE_KEY = 'ym_visit_count'
const SESSION_KEY = 'ym_session_counted'

function formatCount(n: number): string {
  if (n >= 10_000) return `${(n / 1000).toFixed(1)}K`
  return n.toLocaleString('de-DE')
}

export function useVisitorCount(): string {
  const [display, setDisplay] = useState<string>('—')

  useEffect(() => {
    try {
      const alreadyCounted = sessionStorage.getItem(SESSION_KEY)
      const stored = parseInt(
        localStorage.getItem(STORAGE_KEY) ?? String(BASE_COUNT),
        10,
      )
      const current = alreadyCounted ? stored : stored + 1

      if (!alreadyCounted) {
        localStorage.setItem(STORAGE_KEY, String(current))
        sessionStorage.setItem(SESSION_KEY, '1')
      }

      setDisplay(formatCount(current))
    } catch {
      setDisplay(formatCount(BASE_COUNT))
    }
  }, [])

  return display
}
