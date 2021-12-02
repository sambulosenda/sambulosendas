import React from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="transition duration-500 ease-in-out rounded-full">
      {theme === 'dark' ? (
        <RiSunFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer transition-all"
        />
      ) : (
        <RiMoonClearFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer transition-all"
        />
      )}
    </div>
  )
}

export default ModeToggle
