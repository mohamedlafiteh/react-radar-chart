
import RadarChart from "./components/RadarChart"
import ChartDataTable from "./components/ChartDataTable"

const data = require("./util/data")
const options = require("./util/data")
const React = require('react')


class App extends React.Component{
  state={
    data:data,
    option:options

   }
  render() {
    const {data,options} =this.state
    return(
      <div>
      <RadarChart data={data} options={options} />   
      <ChartDataTable data={data} />
      </div>
    )
  }
}

export default App

