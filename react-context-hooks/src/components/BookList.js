import React from 'react'
import ThemeContextProvider from '../contexts/ThemeContext';

function BookList() {
    //const theme = useContext(ThemeContext);
    //console.log(theme)
   // const applytheme = theme.isLightTheme ? theme.light : theme.dark;
    return (
        // <div className="book-list" style={{color:theme.syntax, backgroud: theme.bg}}>
        <ThemeContextProvider.Consumer> { theme => {  return (
                <div>
                    <ul>
                    <li>the way of kings</li>
                    <li>the name of the wind</li>
                    <li>the final empire</li>
                    </ul>
                </div>
        )}
        
        }        
        </ThemeContextProvider.Consumer>
    )
}

export default BookList
