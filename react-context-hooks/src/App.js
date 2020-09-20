import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
//export const ChannelContext = React.createContext()
function App() {
 
  return (
    <div className="App">
      
      <ThemeContextProvider >
        {/* <ChannelContext.Provider value={'Codevolution'}> */}
          <h1>React Context & Hooks - tutorail</h1>
          <Navbar />
          <BookList />
        {/* </ChannelContext.Provider> */}
       </ThemeContextProvider>
    </div>
  );
}

export default App;
