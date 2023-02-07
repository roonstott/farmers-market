import React from 'react';
import './App.css';
import Header from './Header.js'
import LocationControl from './LocationControl.js'
import ProduceControl from './ProduceControl.js'

function App() {
  return (
    <React.Fragment >
      <Header />
      <LocationControl />
      <ProduceControl />
    </React.Fragment>
  );
}

export default App;
