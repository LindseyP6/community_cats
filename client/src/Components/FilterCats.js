import React from 'react'

function FilterCats({setSearchTerm, searchTerm,}) {

  return (
    <div className="filterSearch">
      <p>Search cats by name, human name, TNR or Trap Date, address, temperment and description qualities. (Psst...searching will change the map!)</p>
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