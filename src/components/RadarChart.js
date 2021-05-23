import {Radar} from 'react-chartjs-2';
const React = require('react')


class RadarChart extends React.Component{
  
  render() {
      const {data,options} = this.props.data
    return(
      <div>
       <Radar data={data} options={options}/>
      </div>
    )
  }
}


export default RadarChart;

