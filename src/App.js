import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Content from './Components/Content/Content.jsx';
import Footer from './Components/Footer/Footer.jsx';
import state from './redux/state.js';


const App = (props) => {
    return (
    <div className="App">
      <Header />
      <Content state={props.state.comments} addNewComment={props.addNewComment} />
      <Footer />
    </div>
    );
}

export default App;