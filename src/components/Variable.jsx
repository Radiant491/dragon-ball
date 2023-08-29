import React from 'react'

export default function variable() {
    var a=10
    var b=10
    const c=10
    a=20
    b=20
    let name = "Roy"
    if(true){
        let name ="Dean"
        console.log(name,11)
    }
    console.log(name,1111)


  return (
    <div>
        {a}
        {b}
        {c}
    </div>
  )
}

