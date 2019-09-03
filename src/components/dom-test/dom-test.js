import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import "./dom-test.css";

class Domtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arraySize: 1,
      renderRows: false,
    };
    this.generateArray = this.generateArray.bind(this);
    this.renderArray = this.renderArray.bind(this);
    this.clearArray = this.clearArray.bind(this);
    this.changeArray = this.changeArray.bind(this);
  }
  handleChange = (e) => { 
    this.setState({arraySize: e.target.value});
  }
  generateArray(){
    let i = 0
    this.setState({
      array: Array.from({length: this.state.arraySize}, () => i++)
    })
  }
  renderArray(){
    this.setState({
      renderRows: !this.state.renderRows
    })
  }
  clearArray(){
    this.setState({
      array: []
    })
  }
  changeArray(){
    console.log("change")
    let a = this.state.array.map(e => e + 1)
    this.setState({
      array: a
    })
    console.log(this.state.array)
  }
  componentDidMount() {
  }

  render() {
    return (
    <div id="input">
        <input type="text" value={this.state.arraySize} onChange={this.handleChange}/>
        <br></br><br></br>
        <Button variant="primary" onClick={this.generateArray}>Prepare array</Button>
        <Button variant="success"onClick={this.renderArray}>Render</Button>
        <Button variant="danger"onClick={this.clearArray}>Clear</Button>
        <Button variant="warning"onClick={this.changeArray}>Change</Button>
        <p>Set array size: {this.state.array.length}</p>
        <p>Rendering: {this.state.renderRows}</p>
        {this.state.renderRows &&
          <ul>
            {this.state.array.map((index, key) =>
            <li key={key}>{index}</li>)
            }
          </ul>
        }
    </div>
    );
  }
}
export default Domtest;