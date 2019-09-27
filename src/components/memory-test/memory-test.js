import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import "./memory-test.css";

class MemTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      newArray: [],
      arraySize: 1,
      rendered: false,
    };
    this.generateArray = this.generateArray.bind(this);
    this.swapArray = this.swapArray.bind(this);
    this.clearArray = this.clearArray.bind(this);
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
  swapArray(){
    this.setState({
      newArray: this.state.array,
      rendered: true,
    })
  }
  clearArray(){
    this.setState({
      array: [],
      newArray: [],
      rendered: false
    })
  }
  componentDidMount() {
  }

  render() {
    return (
    <div id="input">
        <input type="text" value={this.state.arraySize} onChange={this.handleChange}/>
        <br></br><br></br>
        <Button variant="primary" onClick={this.generateArray}>Generate array</Button>
        <Button variant="success"onClick={this.swapArray}>Run test</Button>
        <Button variant="danger"onClick={this.clearArray}>Reset all</Button>
        <p>Set array size: {this.state.array.length}</p>
        {
          <ul id="oldArray">
            {this.state.array.map((index, key) =>
            <li key={key}>{index}</li>)
            }
          </ul>
        }
            <p>Memory allocated: {this.state.rendered.toString()}</p>
    </div>
    );
  }
}
export default MemTest;