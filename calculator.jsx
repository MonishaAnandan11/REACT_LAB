import React, { useState } from 'react'

function calculator() {
  const [num1,setNum1]=useState("")
  const [num2,setNum2]=useState("")

  const a=Number(num1);
  const b=Number(num2);
    return (
    <div>
      <h1 style={{textDecoration:"underline"}}>calculator</h1>
      <input type="number"placeholder='enter the first value'
      onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number"placeholder='enter the second value'
      onChange={(e)=>setNum2(e.target.value)}/>
      <div style={{height:"100px",
      widh:"200",
      border:"3px inside black",
      marginLeft:"260px",
      marginTop:"20px",
      backgroundColor:"babypink",
      textAlign:"left"}}>
        <h3>result:</h3>
        <p><strong>Addition:</strong>{a+b}</p>
        <p><strong>subraction:</strong>{a-b}</p>
        <p><strong>multiplication:</strong>{a*b}</p>
        <p><strong>devision:</strong>
        {b==0 ?"can't divided by zero":a/b}</p>
      </div>

      
    </div>
  )
}

export default calculator

