import { cn } from '@shared/utils'

import type { ButtonProps } from '@shared/ui/types'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-md transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-600',
        variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        variant === 'outline' && 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
