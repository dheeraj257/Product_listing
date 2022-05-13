import React from 'react'

const SearchBox = () => {
  return (
    <div className="d-flex">
      <input className="form-control me-2" type="text"
        placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary" >🔍</button>
    </div>
  )
}

export default SearchBox