"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"

export function Providers({
  children,
  defaultTheme = "dark",
}: {
  children: React.ReactNode
  defaultTheme?: string
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem={false}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </ThemeProvider>
  )
}

