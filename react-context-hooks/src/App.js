import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <h1>React Context & Hooks - tutorail</h1>
          <Navbar />
          <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
