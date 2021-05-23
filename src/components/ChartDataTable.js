import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


export class ChartDataTable extends Component {
    render() {
        const {data} = this.props.data
        return (
       <Table striped bordered hover>
        <thead>
            <tr>
            <th></th>
            <th>First dataset</th>
            <th>Last dataset</th>
            </tr>
        </thead>
        <tbody>
            {
              data.labels.map((element,index) => {
                  return (
                    <tr key={index}>
                        <td>{element}</td>
                        <td>A</td>
                        <td>B</td>
                    </tr>
                  )
              })  
            }
            {/* <tr>
            <td>Eating</td>
            <td>Mark</td>
            <td>Otto</td>
     
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
     
            </tr>
            <tr>
            <td>3</td>
            <td >Larry the Bird</td>
            <td></td>
      
            </tr> */}
        </tbody>
</Table>
        )
    }
}

export default ChartDataTable
