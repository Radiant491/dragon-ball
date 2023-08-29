import React from 'react'

export default function Arreym() {
    let fruite=['Mango','Apple','Banana','Jackfruite','Orenge']
    console.log(fruite)

    let student=[{ 
        name:'Roy',
        class:'cs',
        age:22,
        id:51
    }]
    // console.log(student);
    
  return (
    <>
    <div>
        {fruite.map((row)=>{
            return <li>{row}</li>
        })}
        <hr />
        
        {student.map((row)=>{
            return(
                <>
                    <p><strong>Name:  </strong>{row.name}</p>
                    <p><strong>class:  </strong>{row.class}</p>
                    <p><strong>age:  </strong>{row.age}</p>
                    <p><strong>id:  </strong>{row.id}</p>
                    
                </>
            )
        })}
        </div>
    
    </>
  )
}
