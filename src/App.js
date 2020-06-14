import React from "react";
import AOS from "aos";

import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

import Header from "./layout/Header/Header.component";
import Hero from "./layout/Hero/Hero.component";
import About from "./layout/About/About.component";

AOS.init();

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
		</div>
	);
}

export default App;
