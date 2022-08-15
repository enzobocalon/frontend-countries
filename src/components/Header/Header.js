import React, { useContext } from 'react'
import './Header.css'
import {MdDarkMode} from 'react-icons/md'
import { ModeContext } from '../../context/Modes'

const Header = () => {

    const {mode, setMode} = useContext(ModeContext)

    mode ? document.body.classList.remove('light') : document.body.classList.add('light')

  return (
    <header className={mode ? '' : 'light'}>
        <h2>Where in the world?</h2>

        <div className='toggle-mode' onClick = {() => setMode(prev => !prev)}>
            <MdDarkMode />
            <span>Dark Mode</span>
        </div>
    </header>
  )
}

export default Header