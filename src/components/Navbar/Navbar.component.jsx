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
		href: "mailto:odemwingiemarv@gmail.com",
		title: "Contact",
	},
];

const Navbar = () => {
	return (
		<nav className="row header-nav-wrap">
			<ul className="header-nav">
				{navlinks.map((navlink, i) => (
					<Link
						key={i}
						{...navlink}
						classes="smoothscroll header-link"
					/>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
