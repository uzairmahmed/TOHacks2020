import React from "react";
import Title from "./title";
import Table from "./table";
import "./App.css";
import data from "./data/customers.json";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      data: data
    }
  }
  render() {
  return (
    <div className="app">
      <Title />
      <Table data={this.state.data}/>
    </div>
  );    
}
}
export default App