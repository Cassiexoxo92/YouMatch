import { getInitials } from '@/lib/utils'

interface ChannelAvatarProps {
  name: string
  color: string
  secondaryColor: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: { container: 'w-10 h-10', text: 'text-sm' },
  md: { container: 'w-14 h-14', text: 'text-lg' },
  lg: { container: 'w-20 h-20', text: 'text-2xl' },
}

export default function ChannelAvatar({ name, color, secondaryColor, size = 'md' }: ChannelAvatarProps) {
  const { container, text } = sizeMap[size]
  const initials = getInitials(name)

  return (
    <div
      className={`${container} rounded-2xl flex items-center justify-center font-display font-bold ${text} flex-shrink-0`}
      style={{
        background: `linear-gradient(135deg, ${color}, ${secondaryColor})`,
        boxShadow: `0 4px 16px ${color}40`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}
