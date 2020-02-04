import React from 'react'
import './search-box.styles.css'

const SearchBox = ({placeholder, handleChange}) => (
    <input type="text" placeholder={placeholder} onChange={e => handleChange(e)} className='search' />
)

export default SearchBox