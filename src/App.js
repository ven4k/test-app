import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Content from './Components/Content/Content.jsx';
import Footer from './Components/Footer/Footer.jsx';



const App = (props) => {
    return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
    );
}

export default App;