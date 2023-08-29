import React from 'react'

export default function Demo() {
    function game(a){
        alert(a)
    }
  return (
    <div>
        <h1>Hello Wonderful World</h1>
        <button onClick={()=>game("You Are Alive")}>Death</button>
    </div>
  )
}
