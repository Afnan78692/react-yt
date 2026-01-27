import React from 'react'

function App() {
const submithandler=(e)=>{
  e.preventDefault()
  console.log("form is submitted")
}

  return (
    <div>
      <form onSubmit={submithandler} >
      <input  type="text" placeholder='enter your name' />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
