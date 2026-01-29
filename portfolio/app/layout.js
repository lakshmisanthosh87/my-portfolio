import { Outfit, Ovo } from "next/font/google"
import "./globals.css"
import AnimatedBackground from "./components/AnimatedBackground"
import LiquidEther from "./components/LiquidEther"
import { LiquidProvider } from "./LiquidProvider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 overflow-x-hidden">
        <LiquidProvider>
          {/* Background effects */}
          <div className="fixed inset-0 -z-10">
            <LiquidEther />
            <AnimatedBackground />
          </div>

          {/* App content */}
          <div className="relative min-h-screen">
            {children}
          </div>
        </LiquidProvider>
      </body>
    </html>
  )
}
