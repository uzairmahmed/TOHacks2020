import React from "react";
import Title from "./title";
import Label from "./label";
import Bodytext from "./bodytext";
import Table from "./table";
import "./App.css";
import data from "./data/customers.json";
import qr from "./qrcode.PNG";

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
      <Label />
      <Bodytext />
      <img className="qrcode" align="right" style={{width: "300px"}} src={qr} alt="Scannable QR Code for the store"/>
      <Table data={this.state.data}/>
    </div>
  );    
}
}
export default App