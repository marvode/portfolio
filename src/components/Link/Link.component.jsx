import React from "react";

const Link = ({ placeholder, href, title, classes }) => {
	return (
		<li>
			<a className={classes} href={href} title={title}>
				{placeholder}
			</a>
		</li>
	);
};

export default Link;
