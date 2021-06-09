import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function RecordsList() {

  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      .then(response => setData(response.data))
      .catch(error => {
        console.log('There was an error!', error)
      });
    }, []);

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
        <Table.Row>
            <Table.Cell><code>{JSON.stringify(data)}</code></Table.Cell>
        </Table.Row>
        </Table.Body>
    </Table>
  )
}