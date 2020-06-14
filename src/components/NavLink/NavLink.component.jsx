import React from "react";

const NavLink = ({ placeholder, href, title }) => {
	return (
		<li>
			<a class="smoothscroll" href={href} title={title}>
				{placeholder}
			</a>
		</li>
	);
};

export default NavLink;
