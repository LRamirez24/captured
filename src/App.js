import React from 'react';
//global Style
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
