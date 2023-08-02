import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('')

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme') || 'light')
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}