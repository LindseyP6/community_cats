import React from 'react'

function FilterCats({setSearchTerm, searchTerm,}) {

  return (
    <div className="filterSearch">
      <p>Search cats by their name, their human's name, TNR or Trap Date, address, temperment or description qualities. (Psst...searching will change the map!)</p>
      <label htmlFor="search"><strong>Search Cats </strong></label>
      <input
        type="text"
        placeholder="type name / description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default FilterCats