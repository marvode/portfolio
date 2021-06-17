import React, { Component } from "react";

import logo from "../../images/logo.svg";

import Logo from "../../components/Logo/Logo.component";
import Navbar from "../../components/Navbar/Navbar.component";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon.component";

const ssMobileMenu = function () {
	const $toggleButton = document.querySelector(".header-menu-toggle");
	const $siteBody = document.querySelector("body");

	$toggleButton.addEventListener("click", function (e) {
		e.preventDefault();
		$toggleButton.classList.toggle("is-clicked");
		$siteBody.classList.toggle("menu-is-open");
	});
	document.querySelectorAll(".header-link").forEach((item) => {
		item.addEventListener("click", () => {
			if (window.matchMedia("(max-width: 900px)").matches) {
				$toggleButton.classList.toggle("is-clicked");
				$siteBody.classList.toggle("menu-is-open");
			}
		});
	});

	window.onresize = function () {
		if (window.matchMedia("(min-width: 901px)").matches) {
			if ($siteBody.classList.contains("menu-is-open"))
				$siteBody.classList.remove("menu-is-open");
			if ($toggleButton.classList.contains("is-clicked"))
				$toggleButton.classList.remove("is-clicked");
		}
	};
};

class Header extends Component {
	componentDidMount() {
		ssMobileMenu();
	}

	render() {
		return (
			<header className="s-header">
				<Logo logo={logo} />

				<div className="header-content">
					<Navbar />

					<a
						href="/public/Marv_Resume.pdf"
						className="btn btn--stroke btn--small header-link"
						download
					>
						Download CV
					</a>
				</div>
				<HamburgerIcon />
			</header>
		);
	}
}

export default Header;
