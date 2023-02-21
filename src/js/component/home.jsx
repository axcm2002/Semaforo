import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [colorRojo, setColorRojo] = useState("rojo")
	const [colorAmarillo, setColorAmarillo] = useState("amarillo")
	const [colorVerde, setColorVerde] = useState("verde")

	const prenderRojo = () => {
		setColorRojo("rojoB")
		setColorAmarillo("amarillo")
		setColorVerde("verde")
	}

	const prenderAmarillo = () => {
		setColorAmarillo("amarilloB")
		setColorRojo("rojo")
		setColorVerde("verde")
	}

	const prenderVerde = () => {
		setColorVerde("verdeB")
		setColorRojo("rojo")
		setColorAmarillo("amarillo")
	}

	return (
		<div id="app">
			<div id="container">
				<div id="trafficTop"></div>
				<div id="semaforo">
					<div onClick={() => prenderRojo()} class={colorRojo}></div>
					<div onClick={() => prenderAmarillo()} class={colorAmarillo}></div>
					<div onClick={() => prenderVerde()} class={colorVerde}></div>
				</div>
			</div>

		</div>
	);
};

export default Home;
