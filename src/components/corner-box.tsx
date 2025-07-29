import { cn } from '@/lib/utils'

export default function CornerBox({
  backgroundColor,
  children,
  className = 'w-88 h-96',
  borderColor = 'border-white',
}: {
  backgroundColor: string
  children: React.ReactNode
  className?: string
  borderColor?: 'border-white' | 'border-black'
}) {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={cn(
            `relative flex flex-col items-center justify-center border-4 ${borderColor} w-full h-96`,
            className,
          )}
          style={{ backgroundColor }}
        >
          {/* Corner boxes */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-black -translate-x-3 -translate-y-3 z-10" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-white border-2 border-black translate-x-3 -translate-y-3 z-10" />
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-white border-2 border-black -translate-x-3 translate-y-3 z-10" />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-white border-2 border-black translate-x-3 translate-y-3 z-10" />

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  )
}
