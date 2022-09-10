import React, { useContext } from 'react'
import FilteredContext from '../Context/Notes/FilteredContext'

const Temp = () => {
    const {filter,dispatch} = useContext(FilteredContext)
    // console.log(filter)

  return (<>
    <div>temp</div><div>{filter.name}</div><div>{filter.id}</div>
    <button onClick={()=>{
        dispatch({type: 'update',songid: 3})
    }}>Click</button>
  </>)
}

export default Temp