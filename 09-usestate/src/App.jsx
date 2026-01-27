// import React,{useState} from 'react'

// function App() {

//   const [name, setNum] = useState('afnan khan')

//  const changeNum=()=>{
//    setNum('shagil khan')
//  }

//   return (
//     <div>
//       <h2>my name is {name}</h2>
//       <button onClick={changeNum}>click me!</button>
//     </div>
//   )
// }

// export default App


import React, {useState} from 'react'

function App() {

  const [first, setfirst] = useState(0)

  const incnum=()=>{
    setfirst(first+1)
  }
  const decnum=()=>{
    setfirst(first-1)
  }
  const jump=()=>{
      setfirst(first+5)
  }

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={incnum}>increase num</button>
      <button onClick={decnum}>decrase num</button>
      <button onClick={jump}>jump by 5</button>
    </div>
  )
}

export default App
