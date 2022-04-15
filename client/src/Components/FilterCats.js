import React from 'react'
import {useHistory} from 'react-router-dom'

function FilterCats({handleChangeToMyCats, catCards, setSearchTerm, searchTerm, catsArray}) {
  let history = useHistory();

  return (
    <div className="filterSearch">
        <button onClick={handleChangeToMyCats}>My Cats</button>
        <button onClick={() => history.go(0)}>All Zee Cats</button>
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