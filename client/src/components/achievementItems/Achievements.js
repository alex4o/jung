import React from "react";
import {Col, Row, Divider} from "antd";

export default function Achievements() {
    

	const element = <h1>Hello, world</h1>;
	var element1 = What();
	var element2 = createDivider(1, element1);
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

function createDivider(num, Components){

	return(

		<Divider>
			{Components}
		</Divider>
	);

}