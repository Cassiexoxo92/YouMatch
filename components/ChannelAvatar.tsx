'use client'

import Image from 'next/image'
import { useState } from 'react'
import { getInitials } from '@/lib/utils'

interface ChannelAvatarProps {
  name: string
  handle: string
  color: string
  secondaryColor: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_MAP = {
  sm: { px: 40,  text: 'text-sm',  rounded: 'rounded-xl' },
  md: { px: 56,  text: 'text-lg',  rounded: 'rounded-2xl' },
  lg: { px: 80,  text: 'text-2xl', rounded: 'rounded-2xl' },
}

export default function ChannelAvatar({
  name,
  handle,
  color,
  secondaryColor,
  size = 'md',
}: ChannelAvatarProps) {
  const [imgError, setImgError] = useState(false)
  const { px, text, rounded } = SIZE_MAP[size]
  const initials  = getInitials(name)
  const cleanHandle = handle.replace('@', '')
  const avatarSrc   = `https://unavatar.io/youtube/${cleanHandle}`

  return (
    <div
      className={`${rounded} flex-shrink-0 overflow-hidden relative`}
      style={{
        width:     px,
        height:    px,
        minWidth:  px,
        background: imgError
          ? `linear-gradient(135deg, ${color}, ${secondaryColor})`
          : undefined,
        boxShadow: `0 4px 16px ${color}40`,
      }}
      aria-hidden="true"
    >
      {!imgError ? (
        <>
          {/* Gradient placeholder shown behind image while loading */}
          <div
            className={`absolute inset-0 ${rounded} flex items-center justify-center font-display font-bold ${text}`}
            style={{ background: `linear-gradient(135deg, ${color}, ${secondaryColor})` }}
          >
            {initials}
          </div>
          <Image
            src={avatarSrc}
            alt={`${name} YouTube-Kanal`}
            width={px}
            height={px}
            className={`relative w-full h-full object-cover ${rounded}`}
            onError={() => setImgError(true)}
            unoptimized
          />
        </>
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center font-display font-bold ${text}`}
        >
          {initials}
        </div>
      )}
    </div>
  )
}
