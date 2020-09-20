import React, {useState } from 'react';
export const ThemeContext = React.createContext();

//Method: 1
//ThemeContextProvider
export default function ThemeContextProvider(props){
    const[theme, setTheme] = useState({
        isLightTheme: true,
        light:  { syntax: '#555', ui : '#ddd', ng: '#eee' },
        dark: { syntax: '#ddd', ui : '#333', ng: '#555' }
    })
    return(
        <ThemeContext.Provider  value={{theme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}


//Method: 2

// const ThemeContextProvider = (props) => {
//     const[theme, setTheme] = useState({
//          isLightTheme: true,
//          light:  { syntax: '#555', ui : '#ddd', ng: '#eee' },
//          dark: { syntax: '#ddd', ui : '#333', ng: '#555' }
//         })
//      return(
        
//         <ThemeContext.Provider  value={{theme}}>        
//              {props.children}
//         </ThemeContext.Provider>
//      )
//  }
//  export default ThemeContextProvider;
 /* //<ThemeContext.Provider value={'Codevolution'}> */

 // {this.props.children} - at class comp, ==> stateless func comp -> (props)