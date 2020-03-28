import React from "react";
import {Col, Row, Drawer, Button, Card} from "antd";

export default function Achievements() {
    

	const element = <h1>Hello, world</h1>;

	var element2 = createDrawer();
	return element2;
}

function What() {

	return (

		<>
		<Row span={20}>

			<h2> What </h2>

			<Col offset={3}>

				<h1> Col inside Row </h1>
			</Col>
			<Col offset={0}>

				<h1> Col2 inside Row1 </h1>

				<Row>

					<h2> Row inside Column</h2>
				</Row>
			</Col>
			<Col span={50}>

				<h1> Col inside Row </h1>
			</Col>
		</Row>

		<Row>

			<h1> Whaaaaat </h1>
		</Row>

		<Col span={110}>

			<h1> Column </h1>
		</Col>
		</>
	);
}

function createCard(){

	return(

		
			<Card title={"Title"}>
				
				<h1> This is an achievement </h1>
				
			</Card>

		
	);

}