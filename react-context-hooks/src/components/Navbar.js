import React  from 'react';
import {ThemeContext } from '../contexts/ThemeContext';
//import {  ChannelContext } from '../App'

export default function Navbar() {
    //const { isLightTheme, light, dark } = useContext(ThemeContext);
    return (
        <ThemeContext.Consumer>  { theme =>    
            { return (

            
                    <div> 
                        <nav>
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                    // </div>
            )}
            }   
        </ThemeContext.Consumer>
    )
}

//export default Navbar
//const Navbar = () =>{ }
