import React from 'react'

function FilterCats({handleChangeToMyCats, setSearchTerm, searchTerm, catsArray}) {
  return (
    <div className="filterSearch">
      <button onClick={handleChangeToMyCats}>My Cats</button>
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