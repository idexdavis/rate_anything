import React from 'react';

function Name(props){
	return (
	<div>
		<div id="nm">
			<h1>{props.name}</h1>
		</div>
		<p id="dtbase">Rating base on {props.qt} data collect from students.</p>
		<Rate rate={props.rate}/>
	</div>	
		);
}

function Rate(props){
	return (
	<div id="rt_area">
		<div id="rt">
			<div id="score">
				<p>{props.rate}</p>
			</div>
			<div id="outof">
				<p>/5</p>
			</div>
		</div>
	</div>
		)
}

const element = {name: "Prof Somebody",
				rate:4.3,
				qt:2
}

function ProfessorInfo() {
	return (
		<Name
				name = {element.name}
				rate = {element.rate}
				qt = {element.qt}
				/>
	)
}

export default Name;

