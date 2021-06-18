import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/sass/style.scss';
import { Container } from 'react-bootstrap';
import Main from './components/Main';

function App() {
  return (
    <>      
      <Container fluid>
        <h1>SpaceX Launch Programs</h1>
        <Main />       
      </Container>      
    </>
  );
}

export default App;
