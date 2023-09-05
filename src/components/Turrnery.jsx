import React from 'react'

export default function Turrnery() {
  // const joy = 'foy';
  // if(joy == 'Roy'){
  //   alert('true')
  // }else{
  //   alert('false')
  // }
  // console.log(joy)
  const Chess = (Roy) => {
 console.log(Roy);
  Roy ==true?alert('A is true'):Roy==false ? alert('A is false'):alert('A is not value')
}
const Coin = (wwe) =>{
 console.log(wwe);
   wwe =='Roman'?alert('My name is Roman'): wwe =='Dean'?alert('My name is Dean'):alert('My name is Seth')
}
const Num = (n1) => {
  n1 === 0? alert('This is neither even nor odd') : n1 % 2 === 0 ? alert('This is even number') : alert('This is odd number');
};
const Join = () => {
  const inputElement = document.getElementById('numberInput');
  const number = parseInt(inputElement.value);
 Num(number);
};


const Lan = (no) =>{
  console.log(no);
  no = (no%2 == 0)?alert('given number is Odd'):alert('given number is Even')
}
  return (
    <div>
      <button onClick={()=>Chess(true)}>a=true</button>
      <button onClick={()=>Chess(false)}>a=false</button>
      <button onClick={()=>Chess('do')}>none</button>

      <div>
      <button onClick={()=>Coin('Roman')}>Roman</button>
      <button onClick={()=>Coin('Dean')}>Dean</button>
      <button onClick={()=>Coin('Seth')}>Seth</button>
      <hr />
      
    </div>
    <div>
        <input type="number" id="numberInput" onChange={(e)=>Num(e.target.value)} placeholder="Enter Number"  />
        <button type="button" onClick={Join} > Submit</button>
      </div>

    <hr />
    <input type="text" />
    <button onChange={()=>Lan()}>Submit</button>
    </div>
    
  )
}
