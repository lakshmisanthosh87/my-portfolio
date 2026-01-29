'use client'

import { createContext, useContext, useState } from 'react'

const LiquidContext = createContext(null)

export function LiquidProvider({ children }) {
  const [enabled, setEnabled] = useState(true)

  return (
    <LiquidContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </LiquidContext.Provider>
  )
}

export function useLiquid() {
  const context = useContext(LiquidContext)
  if (!context) {
    throw new Error('useLiquid must be used inside LiquidProvider')
  }
  return context
}
