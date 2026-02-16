import React,{ useState } from 'react';

function Theme() {
  const [theme,setTheme] =useState("light");
  const toggleTheme=()=>{
    setTheme(theme == "ligth" ? "dark":"ligth" )
  }
  const containerStyle={
    minHeight:"200px",
    padding:"10px",
    backgroundColor: theme == "ligth" ? "Black":"white",
    color: theme == "ligth" ? "white":"Black",
  }
  return (

    <div style={containerStyle}>
        <h1>Theme Toggle Example</h1>
        <p>Click the button to switch between Light and Dark Mode.</p>
        <button onClick={toggleTheme}>
            Switch to{theme == "ligth" ? "dark":"ligth" }Mode
        </button>
        <div style={{ marginTop:"20px"}}>
            <p>Text color also change according to the selected theme</p>
        </div>
    </div>
  );
}
export default Theme