import React, { useState } from 'react'

const Contact = () => {
    let[value,setValue]= useState(0);

    let inc=()=>{
        setValue(value+1)
    }
  return (
    <div className='btn'>
      <h1>{value}</h1>
      <button onClick={inc}>click me</button>
    </div>
  )
}

export default Contact
