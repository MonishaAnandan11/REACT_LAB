import React,{ useState,useEffect } from 'react'

function Fakestoreapi() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then((data)=>setProducts(data))
    },[] )
  return (
    <div style={Style.Card}>
        <img src={products.image}alt="" style={Style.img}/>
        <h4>{products.title}</h4>
        <p><h>price:</h>{products.price}</p>
        <p><h>Description:</h>{products.Description}</p>
        <p><h>Category:</h>{products.Category}</p>
    </div>
  )
}
const Style={
    Card:{
        width:"300px",
        border:"1px solid #cc",
        padding:"15px",
        borderradius:"8px",
        margin:"20px auto",

    },
    img:{
        width:"100%",
        height:"200px",
        objectFile:"contain"
    }
    }


export default Fakestoreapi
