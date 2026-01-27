import React from 'react'

function card(props) {
  return (
    <div className="parent">
    <div className='card'>
        <img src={props.img} />
        <h1>{props.user}</h1>
        <h3>age:- {props.age}</h3>
        <p>cusandae ipsum consecudantium quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, nostrum.</p>
        <button>view profile</button>
      
    </div>
    </div>
  )
}

export default card
