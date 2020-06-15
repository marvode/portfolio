import React from "react";
import AOS from "aos";

import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

import Header from "./layout/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import Services from "./components/Services/Services.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Testimonials from "./components/Testimonials/Testimonials.component";
import Footer from "./layout/Footer/Footer.component";

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
			<Footer />
		</div>
	);
}

export default App;
