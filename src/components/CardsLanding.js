import React from 'react';

import Card from 'react-bootstrap/Card';

function CardsLanding() {
	return (
		<div className='container__card'>
			<Card className='cardInfo'>
				<Card.Body></Card.Body>
			</Card>
			<Card className='cardInfo'>
				<Card.Body>
					How Many Homes?
					<h5>Number of homes</h5>
				</Card.Body>
			</Card>
			<Card className='cardInfo'>
				<Card.Body>
					Choose Plan
					<h5>Professional Plan</h5>
				</Card.Body>
			</Card>
			<Card className='cardInfo'>
				<Card.Body>
					CHECK OUT
					<h5>Payment & Shipment</h5>
				</Card.Body>
			</Card>
			<Card className='cardInfo cardSpecial'>
				<Card.Body>
					<h5>Quick Start</h5>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardsLanding;
