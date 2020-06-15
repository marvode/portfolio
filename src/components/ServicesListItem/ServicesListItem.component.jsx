import React from "react";

const ServicesListItem = ({ title, details }) => {
	return (
		<li className="services-list__item">
			<div className="services-list__item-header">
				<h5>{title}</h5>
			</div>
			<div className="services-list__item-body">
				<p>{details}</p>
			</div>
		</li>
	);
};

export default ServicesListItem;
