import React from 'react';
import './App.css';
import DomTest from './components/dom-test/dom-test'
// import MemTest from './components/memory-test/memory-test'

function App() {
  return (
    <div className="App">
      <DomTest></DomTest>
      {/* <MemTest></MemTest> */}
    </div>
  );
}

export default App;
