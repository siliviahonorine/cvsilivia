import React from 'react';
import {useState} from 'react';
const switchThem= e => {
if (theme == DarkTheme ){
    body.classList.replace(DarkTheme,lightTheme)
    e.target.classList.remove(clickedClass)
    localStorage.setItem("theme","light")
    theme =lightTheme
}else{
    body.classList.replace(lightTheme,DarkTheme)
    e.target.classList.add(clickedClass)
    localStorage.setItem("theme","dark")
    theme =DarkTheme
}



}
const DarkMode= () => {
    let clickedClass = "clicked"
const body=document.body
const lightTheme = "light"
const DarkTheme = "dark"
let theme
    return (
        <><button className="Dark" id="DarkMode" onClick={e =>switchThem}></button>
        </>
    );
};

export default DarkMode;
body{
    font-family: var(--body-font);
    font-weight: 200;
    color: var(--text-color);
    background: var(--body-bg-color);
  }
  h1,h2,h3{
    margin-bottom: var(--spacing-1);
    font-weight: 400px;
    color: var(--title-color);
  }
  h1{
    font-size: var(--h1-font-size);
    text-transform: uppercase;
    
  }
  h2{
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-4);
    font-size: var(--h1-font-size);
    letter-spacing: 4px;
    
  }
  
  a{
    text-decoration: none;
    color: inherit;
  
  }
  p{
    margin-bottom: var(--spacing-2);
  }
  ul{
  padding-left: 1.3rem;
  }
  li{
    margin-bottom: var(--spacing-2);
  }
  .mb3{
    margin-bottom: var(--spacing-3);
  }
  .mb4{
    margin-bottom: var(--spacing-4);
  }
  
  @media screen and (min-width:768px){
    .grid_container{
      display: grid;
      grid-template-columns: 1fr 3fr;
    
    }
    .grid-row{
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin: 0;
    }
  }
  .sidebar{
    padding: 1.5rem;
    background-color: var(--sidebar-bg-color);
  }
  .circle{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right:8px;
    border-radius: 50px;
    background-color: var(--circle-color);
  }
  .circle-plain{
    background-color: var(--circle-color-plain);
  }
  .main{
     padding: 1.5rem;
  }
  
