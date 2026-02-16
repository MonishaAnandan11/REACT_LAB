import React,{useState} from 'react'

function TabComponent() {
  const [activeTab,setActiveTab]=useState("Home");
  return (
    <div style={Styles.container}>
      <h1>Hi! Tab-Container</h1>
      <div style={Styles.tabContainer}>
        <button onclick={()=>setActiveTab("Home")}>Home</button>
        <button onclick={()=>setActiveTab("About")}>About</button>
        <button onclick={()=>setActiveTab("Contact")}>Contact</button>
        </div>
        <div style={Styles.contentBox}>
          {activeTab == "Home" && <p>Home</p>}
          {activeTab == "About" && <p>ReactJs sec lab</p>}
          {activeTab == "Contact" && <p>@technical Team</p>}
        </div>
    </div>
  )
}
const Styles={
  container:{
    minHigth:"100px",
    padding:"20px",
    border:"1px solid"
  },
  tabContainer:{
    padding:"20px",
    border:"none",
    margin:"20px",
  },
  contentBox:{
    height:"100px",
    width:"300px",
    marginLeft:"300px",
    background:"lightblue",
    paddingTop:"10px",
  },
  }
  
  

export default TabComponent
