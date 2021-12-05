import React from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  let icon = <RiSunFill id="sun" />
  switch (resolvedTheme) {
    case 'light':
      icon = <RiMoonFill id="moon" onClick={() => setTheme('dark')} />
      break
    case 'dark':
      icon = <RiSunFill id="sun" onClick={() => setTheme('light')} />
      break
  }

  return (
    <div className="text-gray-500 dark:text-gray-500 text-xl cursor-pointer transition-all">
      {icon}
    </div>
  )
}

export default ModeToggle
