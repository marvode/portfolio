import React from "react";

const Logo = ({ logo }) => {
	return (
		<div class="header-logo">
			<a href="index.html">
				<img src={logo} alt="Homepage" />
			</a>
		</div>
	);
};

export default Logo;
