import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


export class ChartDataTable extends Component {
    render() {
        const {labels,datasets} = this.props.data.data;
        return (
       <Table striped bordered hover>
        <thead>
            <tr>
            <th colSpan="3">Title</th>
            </tr>
            <tr>
            <th></th>
            <th>First Dataset</th>
            <th>Second Dataset</th>
            </tr>
        </thead>
        <tbody>
            {
              labels.map((element,index) => {
                  return (
                    <tr key={index}>
                        <td>{element}</td>
                        <td>{datasets[0].data[index]}</td>
                        <td>{datasets[1].data[index]}</td>
                    </tr>
                  )
              })  
            }
    
           
        </tbody>
</Table>
        )
    }
}


export default ChartDataTable
