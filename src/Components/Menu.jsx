import React, {useState} from "react";

import "./Menu.css"


export const Menu = ({menuTitle, menuItems}) =>{

    const [counter, setCounter] = useState(0)
    
    const resetHandler = () =>{
        setCounter(0)
    }
    
    return (
        <div className="App">
          <h1>{menuTitle}</h1>
          <p>Menu Clicked: {counter}</p>
            <ul>
                {
                    menuItems && menuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <button onClick={(e) =>{setCounter(counter+1) 
                                    e.target.disabled=true}}>{item}</button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={resetHandler} >Reset</button>
        </div>
      );
}