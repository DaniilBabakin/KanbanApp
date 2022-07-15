import { useEffect } from 'react'

import { setTheme } from 'store/theme/themeSlice'

import { useTypedDispatch, useTypedSelector } from 'types'
import './themeSwitcher.scss'
export const ThemeSwitcher: React.FC = () => {
  const dispatch = useTypedDispatch()
  const theme = useTypedSelector((state) => state.theme)
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <div className='theme__switcher'>
      <div className='sun'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='theme__switcher__icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#ffffff'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
      </div>
      <div className='theme__switcher__toggle'>
        <input
          type='checkbox'
          id='switch'
          checked={theme === 'dark' ? true : false}
          onChange={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
        />
        <label htmlFor='switch'>Toggle</label>
      </div>
      <div className='moon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='theme__switcher__icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        </svg>
      </div>
    </div>
  )
}
