'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  asLink?: boolean
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-6xl md:text-8xl',
}

export default function Logo({ size = 'md', className, asLink = true }: LogoProps) {
  const content = (
    <span
      className={cn(
        'font-display font-bold tracking-tight cursor-pointer select-none',
        sizeMap[size],
        className,
      )}
    >
      <span className="text-white">You</span>
      <span className="logo-text">Match</span>
    </span>
  )

  if (!asLink) return content

  return (
    <Link href="/" aria-label="YouMatch — Startseite">
      {content}
    </Link>
  )
}
