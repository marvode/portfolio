import React from "react";

const ServicesListItem = ({ title, details }) => {
	return (
		<li class="services-list__item is-active">
			<div class="services-list__item-header">
				<h5>{title}</h5>
			</div>
			<div class="services-list__item-body">
				<p>{details}</p>
			</div>
		</li>
	);
};

export default ServicesListItem;
