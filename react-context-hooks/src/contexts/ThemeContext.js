import React, { createContext } from 'react';
export const ThemeContext = createContext();

//Method: 1

// export default function ThemeContextProvider(props){
//    const theme = {
//         isLightTheme: true,
//         light:  { syntax: '#555', ui : '#ddd', ng: '#eee' },
//         dark: { syntax: '#ddd', ui : '#333', ng: '#555' }
//     }
//     return(
//         <ThemeContext.Provider  value={{...theme }}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }


//Method: 2

const ThemeContextProvider = props => {
    const theme = {
         isLightTheme: true,
         light:  { syntax: '#555', ui : '#ddd', ng: '#eee' },
         dark: { syntax: '#ddd', ui : '#333', ng: '#555' }
     }
     return(
         <ThemeContext.Provider  value={{...theme }}>
             {props.children}
         </ThemeContext.Provider>
     )
 }
 export default ThemeContextProvider;


 // {this.props.children} - at class comp, ==> stateless func comp -> (props)