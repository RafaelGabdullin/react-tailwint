import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

/** Внешний лайаут */
export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className} flex flex-1 flex-col`}>
      {children}
    </div>
  )
}
