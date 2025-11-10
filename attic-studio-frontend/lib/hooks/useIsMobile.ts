'use client'

import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint: number = 768) {
  // Initialize with a safe default for SSR/hydration
  const [isMobile, setIsMobile] = useState(true) // Changed from false to true
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount
    checkMobile()

    // Add listener
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [breakpoint])

  // Always assume mobile until client-side JavaScript runs
  // This prevents hydration mismatches and ensures content is visible
  return isMobile
}
