import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: []
      // listNum : [],
      // filteredNames: []
    }
  }

  fetchData = async () => {
    try {
      const newFetchData = await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      console.log(newFetchData);
      this.setState({
        data: newFetchData
      })
    } catch(e) {
        console.log("ERROR", e)
    }
  }

  render(){

    return <h1>Hello</h1>
  
  }
}

export default App;
