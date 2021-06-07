import React from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default class RecordsList extends React.Component {
  state = {
      records: []
  }

  componentDidMount() {
      axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json')
        .then(res => this.setState({records: res.data}))
        console.log(records)
        .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error)
        });
  }
  
  // display all items grouped by listId

  //function for Names 

  render(){

    const records = this.state.records.filter(record => !record).map((record, i));

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
          <Table.Row key = {record.id}>
              <Table.Cell>{records}</Table.Cell>
          </Table.Row>
          </Table.Body>
      </Table>
    )
  }
}