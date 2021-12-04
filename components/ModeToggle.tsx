import React from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      {theme === 'dark' ? (
        <RiSunFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-500 text-xl cursor-pointer "
        />
      ) : (
        <RiMoonClearFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-500 text-xl cursor-pointer "
        />
      )}
    </div>
  )
}

export default ModeToggle
