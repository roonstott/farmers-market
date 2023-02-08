import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './Header.js'
import LocationControl from './LocationControl.js'
import ProduceControl from './ProduceControl.js'

function App() {
  return (
    <React.Fragment >
      <Container fluid>
        <Header />
        <LocationControl />
        <ProduceControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
