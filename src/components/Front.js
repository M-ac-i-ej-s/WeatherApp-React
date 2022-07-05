import React from 'react'

const Front = ({city, celcius}) => {
  return (
    <div>
      <p id="celcius">{celcius}</p>
      <p id="symbol">°</p>
      <p id="place">{city}</p> 
    </div>
  )
}

export default Front
