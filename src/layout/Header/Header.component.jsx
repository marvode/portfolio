import React from "react";

import logo from "../../images/logo.svg";

import Logo from "../../components/Logo/Logo.component";
import Navbar from "../../components/Navbar/Navbar.component";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon.component";

const Header = () => {
	return (
		<header className="s-header">
			<Logo logo={logo} />

			<div className="header-content">
				<Navbar />

				<a href="#0" className="btn btn--stroke btn--small">
					Download CV
				</a>
			</div>
			<HamburgerIcon />
		</header>
	);
};

export default Header;
