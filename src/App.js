import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* pub_2982bb8d4d6d47b3933df50c18fe0f5e */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}

