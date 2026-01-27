import React,{useState} from 'react'

function App() {

  const [title, setTitle] = useState('')

const submithandler=(e)=>{
  e.preventDefault()
  console.log("form is submitted" ,{title})
  setTitle('')
}

  return (
    <div>
      <form onSubmit={submithandler} >
      <input  type="text" placeholder='enter your name'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App 


