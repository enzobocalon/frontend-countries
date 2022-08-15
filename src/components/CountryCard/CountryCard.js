import React, {useContext} from 'react'
import { ModeContext } from '../../context/Modes'
import './CountryCard.css'

const CountryCard = ({country}) => {

  const {mode, setMode} = useContext(ModeContext)

  return (
    <div className={`country ${mode ? '' : 'light'}`}>
        <div className='country-flag'>
            <img src={country.flags.png} alt='flag'/>
        </div>
        <div className='country-data'>
            {
                country.name.common.length > 30 ?
                (
                    <h5>{country.name.common}</h5>
                ) : (
                    <h3>{country.name.common}</h3>
                ) 
            }
            <span>Population: {(country.population).toLocaleString(undefined,
              { minimumFractionDigits: 0 })}</span>
            <span>Region: {country.region}</span>
            <span>Capital: {country.capital}</span>
        </div>

</div>
  )
}

export default CountryCard