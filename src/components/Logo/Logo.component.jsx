import React from "react";

const Logo = ({ logo }) => {
	return (
		<div className="header-logo">
			<a href="/">
				<img src={logo} alt="Homepage" />
			</a>
		</div>
	);
};

export default Logo;
