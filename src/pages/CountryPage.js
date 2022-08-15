import React, {useContext} from 'react'
import Header from '../components/Header/Header'
import { ModeContext } from '../context/Modes'
import './CountryPage.css'

import {Link, useLocation } from 'react-router-dom'

import CountryInfo from '../components/CountryInfo/CountryInfo'

const CountryPage = () => {
  const location = useLocation();
  const state = location.state;

  const {mode, setMode} = useContext(ModeContext)

  return (
    <>
      {
        state !== null 
        ? (
          <>
            <Header />
             <CountryInfo state={state}/>
          </>
        )
        : (
          <div className='error'>
            <h1>Please, to use this page select a country using the main page!</h1>
            <Link to='/frontend-countries'>
              <button id='back-error'>Go to Homepage!</button>
            </Link>
          </div>
        )
      }


    </>
  )
}

export default CountryPage