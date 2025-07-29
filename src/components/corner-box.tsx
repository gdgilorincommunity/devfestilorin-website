export default function CornerBox({
  backgroundColor,
  children,
  className = 'w-88 h-96',
}: {
  backgroundColor: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative flex flex-col items-center justify-center border-4 border-white w-88 h-96 ${className}`}
        style={{ backgroundColor }}
      >
        {/* Corner boxes */}
        <div className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-black -translate-x-3 -translate-y-3" />
        <div className="absolute top-0 right-0 w-6 h-6 bg-white border-2 border-black translate-x-3 -translate-y-3" />
        <div className="absolute bottom-0 left-0 w-6 h-6 bg-white border-2 border-black -translate-x-3 translate-y-3" />
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-white border-2 border-black translate-x-3 translate-y-3" />

        {/* Content */}
        {children}
      </div>
    </div>
  )
}
