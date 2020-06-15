import React from "react";
import ServicesListItem from "../ServicesListItem/ServicesListItem.component";

const services = [
	{
		title: "Product Design",
		details:
			"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
	},
	{
		title: "Product Design",
		details:
			"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
	},
	{
		title: "Product Design",
		details:
			"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
	},
	{
		title: "Product Design",
		details:
			"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
	},
];

const ServicesList = () => {
	return (
		<div class="column large-6">
			<ul class="services-list" data-aos="fade-up">
				{services.map((service, i) => (
					<ServicesListItem key={i} {...service} />
				))}
			</ul>
		</div>
	);
};

export default ServicesList;
