import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import useApis from './useApis';
import ProductBox from './ProductBox';

function Content(){
	const { buttons, filterYearList, filter, FilterFalse, FilterTrue } = useApis();

	
	return(
		<>
			<Col md={2} className="bg-white p-2 border-radius">
				<h3 className="section-heading">Filters</h3>
				{/* Launch year section starts  */}
				<div className="filters-sec">
					<p className="sub-heading">Launch Year</p>
					<div className="filters-btns">
						{buttons.map((item,index) => {                     
		                      return(                 
		                           <Button 
		                           type="button" 		                           
		                           key={index} 
		                           value={item}	
		                           onClick={filterYearList}                           
		                           className="btn-green">
		                           		{item}
		                           </Button>     
		                      );
		                  })}
					</div>
				</div>
				{/* Launch year section ends  */}
				{/* Successful Launch section starts  */}
				<div className="filters-sec">
					<p className="sub-heading">Successful Launch</p>
					<div className="filters-btns">
						<Button type="button" className="btn-green" onClick={FilterTrue}>True</Button>
						<Button type="button" className="btn-green" onClick={FilterFalse}>False</Button>					
					</div>
				</div>
				{/* Successful Launch section ends  */}
				{/* Successful Landing section starts  */}
				<div className="filters-sec">
					<p className="sub-heading">Successful Landing</p>
					<div className="filters-btns">
						<Button type="button" className="btn-green">True</Button>
						<Button type="button" className="btn-green">False</Button>					
					</div>
				</div>
				{/* Successful Landing section ends  */}
			</Col>

			<Col >
				<Row>
				{filter.map((item,index) => {                     
                      return(                 
                            <ProductBox 
                            	key={index}
                            	pname={item.mission_name}
                            	productid={item.mission_id}
                            	year={item.launch_year}
                            	launch={item.launch_success}
                            	land={item.rocket.first_stage.cores.land_success}
                            	image={item.links.mission_patch_small}
							  />         
                      );
                  })}
				</Row>
			</Col>

		</>
	);
}

export default Content;