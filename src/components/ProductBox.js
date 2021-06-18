import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

function ProductBox(props){
	return(
		<>
			{/* Product Box section starts  */}
			<Col xs={12} md={3}>
				<div className="product-box">
					<div className="product-img">
						<img src="/images/product1.png" alt="" />
					</div>
					<h2 className="product-name">{props.pname}</h2>
					<ListGroup as="ul">
					  <ListGroup.Item as="li">
					    <p><span>Mission IDs</span> {props.productid}</p>
					  </ListGroup.Item>
					  <ListGroup.Item as="li">
					  	 <p><span>Launch Year</span> {props.year}</p>
					  </ListGroup.Item>					
					  <ListGroup.Item as="li">
					  	 <p><span>Successful Launch</span> {props.launch ? "True" : "False"}</p>
					  </ListGroup.Item>
					  <ListGroup.Item as="li">
					  	 <p><span>Successful Landing</span> {props.land}</p>
					  </ListGroup.Item>
					</ListGroup>
				</div>
			</Col>
		{/* Product Box section end  */}
		</>
	);
}

export default ProductBox;