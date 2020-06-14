import React from "react";
import Link from "../Link/Link.component";

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
		<nav className="row header-nav-wrap">
			<ul className="header-nav">
				{navlinks.map((navlink, i) => (
					<Link key={i} {...navlink} classes="smoothscroll" />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
