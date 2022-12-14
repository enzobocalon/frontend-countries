import React, {useContext} from 'react'
import '../../pages/CountryPage.css'
import { Link } from 'react-router-dom'

import {MdKeyboardBackspace} from 'react-icons/md'

import { ModeContext } from '../../context/Modes'

const CountryInfo = ({state}) => {
    
    // Getting name from the Object
    const nameIndex = Object.keys(state.name.nativeName).sort()
    const finalNativeName = state.name.nativeName[nameIndex[0]].official

    // Getting currency from the Object
    const currencyIndex = Object.keys(state.currencies).sort()
    const finalCurrency = state.currencies[currencyIndex[0]].name

    const {mode, setMode} = useContext(ModeContext)
  
    // Getting all languages
    let langArray = []
  
    Object.keys(state.languages).forEach((item) => {
      langArray = [...langArray, item]
    });

  return (
    <>
        <div className={`page-container ${mode ? '' : 'light'}`}>
        <div className='col-1'>
            <div className='back-container'>
                    <Link to='/'>
                    <button id='back' className={`${mode ? '' : 'light'}`}><MdKeyboardBackspace/>Back</button>
                    </Link> 
                <img src={state.flags.svg} />
            </div>
        </div>

        <div className='col-2'>
            <div className='row-1'>
            <h1>{state.name.common}</h1>
            </div>
            <div className='row-2'>
            <span><span className='bold'>Native Name:</span> {finalNativeName}</span>
            <span><span className='bold'>Population:</span> {(state.population).toLocaleString(undefined,
                { minimumFractionDigits: 0 })}
            </span>
            <span><span className='bold'>Region:</span>  {state.region}</span>
            <span><span className='bold'>Sub Region:</span>  {state.subregion}</span>
            <span><span className='bold'>Capital:</span>  {state.capital}</span>
            <span><span className='bold'>Top Level Domain:</span>  {state.tld}</span>
            <span><span className='bold'>Currencies:</span>  {finalCurrency}</span>
            <span><span className='bold'>Languages:</span>  {langArray.map((current) => {
                if (langArray.indexOf(current) === langArray.length - 1) {
                return (<>{state.languages[current]}</>)
                } else{
                return (<>{state.languages[current]}, </>)
                }
            })}
            </span>
            </div>
        <div className='row-3'>
            <div className='border-countries'>
            <div className='border'>
            <span className='bold'>Border Countries: </span>
                {
                'borders' in state ? 
                state.borders.map((item) => {
                    return (<span className={`borderCountry ${mode ? '' : 'light'}`}>{item} </span>)
                })
                : 'None'
                }
            </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default CountryInfo