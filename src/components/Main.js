import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Content from './Content';


function Main(){
	return(
		<>
		     <Row className="m-0">
	            <Content />
	            <Col md={12} className="footer">
	            	<h3>Developed by : Chetna Gupta</h3>
	            </Col>
	         </Row>	            
	          
		</>
	);
}

export default Main;