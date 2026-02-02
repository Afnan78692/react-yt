import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between  py-4 px-8 bg-cyan-900'>
      <h2 className='text-xl font-bold'>Afnan</h2>
      <div className='flex gap-8'></div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a className='text-xl font-bold' href="/contact">Contact</a>
    </div>
  )
}

export default Navbar
