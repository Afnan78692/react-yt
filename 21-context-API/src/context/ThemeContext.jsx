import { useState } from "react"
import { createContext } from "react"


export const ThemeDataContext= createContext()

function ThemeContext(props) {

   let[theme,setTheme]= useState('light')

  return (
    <div>
        <ThemeDataContext.Provider value={[theme, setTheme]}>
             {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
