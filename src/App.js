import React from "react";
import AOS from "aos";

import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

import Header from "./layout/Header/Header.component";
import Hero from "./layout/Hero/Hero.component";
import About from "./layout/About/About.component";
import Services from "./layout/Services/Services.component";
import Portfolio from "./layout/Portfolio/Portfolio.component";
import Testimonials from "./layout/Testimonials/Testimonials.component";

AOS.init();

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
			<Services />
			<Portfolio />
			<Testimonials />
		</div>
	);
}

export default App;
