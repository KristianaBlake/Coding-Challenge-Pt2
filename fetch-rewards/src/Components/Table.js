import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class DataTable extends React.Component {

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
      </Table.Body>
    </Table>
        )
    }

}