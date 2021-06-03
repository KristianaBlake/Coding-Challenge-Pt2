import React, { Component, useLayoutEffect } from 'react';
import axios from 'axios';

export default class Records extends React.Component {
  state = {
    records: []
  }

 componentDidMount() {
   axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => this.setState({records: res.data}))
  
  };


  render(){
    return (
      <ul>
        {this.state.records.map(record => <li key={record.id}>{record.listId}</li>)}
      </ul>

    )
  }
}