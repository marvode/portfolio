import React from "react";
import NavLink from "../NavLink/NavLink.component";

const navlinks = [
	{
		placeholder: "Home",
		href: "#hero",
		title: "Intro",
	},
	{
		placeholder: "About",
		href: "#about",
		title: "About",
	},
	{
		placeholder: "Services",
		href: "#services",
		title: "Services",
	},
	{
		placeholder: "Works",
		href: "#portfolio",
		title: "Works",
	},
	{
		placeholder: "Say Hello",
		href: "#mailto:#0",
		title: "Contact Us",
	},
];

const Navbar = () => {
	return (
		<nav class="row header-nav-wrap">
			<ul class="header-nav">
				{navlinks.map((navlink, i) => (
					<NavLink key={i} {...navlink} />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
