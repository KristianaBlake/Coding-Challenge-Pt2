import React, { Component, useLayoutEffect } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default class Records extends React.Component {
  state = {
    records: []
  }

 componentDidMount() {
   axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => this.setState({records: res.data}))
  
  };


  render(){
    return (

        <Table.Body>
            {this.state.records.map( record => 
                <Table.Row key = {record.id}>
                    <Table.Cell>{record.listId}</Table.Cell>
                </Table.Row>
            )}
        </Table.Body>

        // <ul>
        // {this.state.records.map(record => <li key={record.id}>{record.listId}</li>)}
        // </ul>
    )
  }
}