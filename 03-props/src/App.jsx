import React from 'react'
import Card from './component/card.jsx'

function App() {
  return (
    <div className='parent'>
      <Card user='afnan' age={18} img='https://plus.unsplash.com/premium_photo-1728892768695-ebebed48ff90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="image '/>
      <Card user='zeyan' age={11} img='https://plus.unsplash.com/premium_photo-1661881429258-d370c3f95276?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480'/>
      <Card user='khan' age={12} img='https://plus.unsplash.com/premium_photo-1674479813017-312c6fe99786?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232'/>
    
    </div>
  )
}

export default App
