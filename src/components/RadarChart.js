import { Table } from 'react-bootstrap';
import {Radar} from 'react-chartjs-2';
const React = require('react')



class RadarChart extends React.Component{
  
  render() {
      const {data,options} = this.props.data
    return(
        <Table striped bordered hover>
        <thead>
            <tr>
            <th colSpan="3">Title</th>
            </tr>
        </thead>
        <tbody>
         <div>
       <Radar data={data} options={options}/>
         </div>
        </tbody>
       </Table>  
    )
  }
}


export default RadarChart;

