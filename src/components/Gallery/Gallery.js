import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './Gallery.css'
import { ModeContext } from '../../context/Modes'
import {getCountry} from '../../services/api'

import {MdOutlineSearch, MdExpandMore} from 'react-icons/md'
import CountryCard from '../CountryCard/CountryCard'

const Gallery = () => {

    const {mode, setMode} = useContext(ModeContext)

    const [openBox, setOpenBox] = useState(false)
    const [countries, setCountries] = useState([])
    const [allCountries, setAllCountries] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)


    const filterSearch  = search.length > 0
        ? allCountries.filter(country => country.name.common.toLowerCase().includes(search))
        : []

    const handleFilter = (continent) => {
        if (continent === 'All') {
            setCountries(allCountries)
            setOpenBox(false)
        } else if (continent === 'Africa') {
            setOpenBox(false)
            const filteredCountries = allCountries.filter((item) => {
                return item.region === 'Africa'
            })
            setCountries(filteredCountries)
        } else if (continent === 'Americas') {
            setOpenBox(false)
            const filteredCountries = allCountries.filter((item) => {
                return item.region === 'Americas'
            })
            setCountries(filteredCountries)
        } else if (continent === 'Asia') {
            setOpenBox(false)
            const filteredCountries = allCountries.filter((item) => {
                return item.region === 'Asia'
            })
            setCountries(filteredCountries)
        } else if (continent === 'Europe') {
            setOpenBox(false)
            const filteredCountries = allCountries.filter((item) => {
                return item.region === 'Europe'
            })
            setCountries(filteredCountries)
        } else if (continent === 'Oceania') {
            setOpenBox(false)
            const filteredCountries = allCountries.filter((item) => {
                return item.region === 'Oceania'
            })
            setCountries(filteredCountries)
        }
        
    }

    useEffect(() => {
        getCountry().then((res) => {
        setAllCountries(res) 
        setCountries(res) 
        setLoading(false)   
    })
    }, [])

  return (
<>  
 {
    !loading ? (
    <main className={mode ? '' : 'light'}>
        <div className='action-container'>
            <div className={`search-container ${mode ? '' : 'light'}`}>
                <MdOutlineSearch id='search-icon'/>
                <input id='search' className={mode ? '' : 'light'} placeholder='Search for a country...' onChange = {e => {setSearch(e.target.value.toLowerCase())}}/>
            </div>

            <div className='filter-container'>
                <select name='country' id='country'>
                    <option value="" disabled selected>Filter by Region</option>
                    <option value='africa'>Africa</option>
                    <option value='america'>America</option>
                    <option value='asia'>Asia</option>
                    <option value='europa'>Europe</option>
                    <option value='oceania'>Oceania</option>
                </select>

                <div className={`select-selected ${mode ? '' : 'light'}`} onClick={() => setOpenBox(prev => !prev)}>
                    Filter by Region
                    <MdExpandMore />
                </div>
                <div className={`select-items ${openBox ? '' : 'select-hide'} ${mode ? '' : 'light'}`}>
                    <div onClick = {() => handleFilter('All')}>All</div>
                    <div onClick = {() => handleFilter('Africa')}>Africa</div>
                    <div onClick = {() => handleFilter('Americas')}>America</div>
                    <div onClick = {() => handleFilter('Asia')}>Asia</div>
                    <div onClick = {() => handleFilter('Europe')}>Europe</div>
                    <div onClick = {() => handleFilter('Oceania')}>Oceania</div>
                </div>
            </div>
        </div>

        <div className='gallery-container'>
        {
            search.length > 0 ? 
                filterSearch.map(item => {
                    return (
                    <Link to={`/${item.name.common}`} state={item}>
                        <CountryCard country = {item}/>
                    </Link>   
                    )
                })
                :
                countries.map((item) => {
                    return (
                    <Link to={`/${item.name.common}`} state={item}> 
                        <CountryCard country = {item}/>
                    </Link> 
                    )
                })
        }

        </div>
        

    </main>

    ):
    <div className='loading-container'>
        <div className={`lds-ellipsis ${mode ? '' : 'light'}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  }  
</>  
  )
}

export default Gallery