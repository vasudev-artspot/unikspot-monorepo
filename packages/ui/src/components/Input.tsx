import { cn } from '@shared/utils'

import type { InputProps } from '@shared/ui/types'

export function Input({ label, error, className = '', ...props }: Readonly<InputProps>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={cn(
          'block w-full rounded-md border px-3 py-2 text-sm shadow-sm',
          'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500',
          error ? 'border-red-400' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
