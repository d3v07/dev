"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="theme-icon--dark" aria-hidden="true" />
      <Moon className="theme-icon--light" aria-hidden="true" />
    </button>
  )
}
