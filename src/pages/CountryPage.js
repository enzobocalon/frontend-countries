import React, {useContext, useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import { ModeContext } from '../context/Modes'
import './CountryPage.css'

import {getCurrentCountry} from '../services/api'

import { useLocation, useParams } from 'react-router-dom'

import CountryInfo from '../components/CountryInfo/CountryInfo'

const CountryPage = () => {
  const location = useLocation();
  let pagePrevState = location.state;

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const {mode, setMode} = useContext(ModeContext)
  
  const countryURL = useParams();

  const shouldFetchData = () => {
    if (pagePrevState !== null) {
      setState(pagePrevState)
      setLoading(false)
    } else {
      getCurrentCountry(countryURL.id).then((res) => {
          setState(res[0])
          setLoading(false);
      })
    }
}

useEffect(() => {
  shouldFetchData()
}, [])

  return (
    <>
      {
        !loading
        ? (
          <>
             <Header />
             <CountryInfo state={state}/>
          </>
        )
        : (
          <div className='loading-container'>
            <div className={`lds-ellipsis ${mode ? '' : 'light'}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CountryPage