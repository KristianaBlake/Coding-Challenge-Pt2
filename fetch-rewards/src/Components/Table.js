import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default class DataTable extends React.Component {
    state = {
        records: []
    }

    componentDidMount() {
        axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => this.setState({records: res.data}))
    };

    render(){
        return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Id
          </Table.HeaderCell>
          <Table.HeaderCell
          >
            List Id
          </Table.HeaderCell>
          <Table.HeaderCell
          >
            Name
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
            {this.state.records.map( record => 
                <Table.Row key = {record.id}>
                    <Table.Cell>{record.id}</Table.Cell>
                    <Table.Cell>{record.listId}</Table.Cell>
                    <Table.Cell>{record.name}</Table.Cell>
                </Table.Row>
            )}
        </Table.Body>
    </Table>
        )
    }

}