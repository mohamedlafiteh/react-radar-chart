
import "./App.css"
import RadarChart from "./components/RadarChart"
import ChartDataTable from "./components/ChartDataTable"
import Navbar from './components/Navbar'

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
        <Navbar/>
         <div className="page-container">
          <div style={styling.row} >
                <div style={styling.column} className="cul-one">
                  <RadarChart data={data} options={options} />   
                </div>

                <div style={styling.column} className="cul-two">
                <ChartDataTable data={data} />
                </div>
          </div>
        </div>
      </div>
    )
  }
}

const styling = {
  row :{
  display: "flex",
  marginLeft:'-5px',
  marginRight:'-5px'
},

column: {
  flex: '50%',
  padding: '5px'
},

table: {
  borderCollapse: 'collapse',
  borderSpacing: '0',
  width: '100%',
  border: '1px solid #ddd'
},

 td :{
  textAlign: 'left',
  padding: '16px'
},
 th :{
  textAlign: 'left',
  padding: '16px'
}

};
export default App

