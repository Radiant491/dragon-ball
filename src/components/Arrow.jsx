import React from 'react'

export default function Arrow() {
  const game = ()=>{
    alert("Say Hi") 
}

  const jack = (mac,sac)=>{
      // alert("My Name is"+"'"+mac+"'"+ "My Age is"+"'"+sac+"'" )
      alert(`my nam is "'${mac}'" and age is "'${sac}'"`)
} 


return (
<>
{/* onClick={()=>jack("roy")} */}
<div></div>
<button type="button"  className="btn btn-yellow btn-sm btn-rounded"  onClick={game}>
          click
        </button>
        <button type="button" className="btn btn-yellow" onClick={()=>jack('"roy"','"22"')} >Click</button>
</>
)
}

