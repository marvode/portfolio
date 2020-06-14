import React from "react";

import logo from "../../images/logo.svg";

import Logo from "../../components/Logo/Logo.component";
import Navbar from "../../components/Navbar/Navbar.component";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon.component";

const Header = () => {
	return (
		<header class="s-header">
			<Logo logo={logo} />

			<div class="header-content">
				<Navbar />

				<a href="#0" class="btn btn--stroke btn--small">
					Download CV
				</a>
			</div>
			<HamburgerIcon />
		</header>
	);
};

export default Header;
