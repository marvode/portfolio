import React, { useState } from "react";

import ServicesListItem from "../ServicesListItem/ServicesListItem.component";
import Accordion from "../Accordion/Accordion.component";

const ServicesList = () => {
	const [services, setServices] = useState([
		{
			id: 1,
			title: "Product Design",
			details:
				"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
			open: false,
		},
		{
			id: 2,
			title: "Product Design",
			details:
				"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
			open: false,
		},
		{
			id: 3,
			title: "Product Design",
			details:
				"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
			open: false,
		},
		{
			id: 4,
			title: "Product Design",
			details:
				"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
			open: false,
		},
	]);
	return (
		<div className="column large-6">
			<ul className="services-list" data-aos="fade-up">
				<Accordion>
					{services.map((service, i) => (
						<ServicesListItem
							key={i}
							{...service}
							setServices={setServices}
							services={services}
						/>
					))}
				</Accordion>
			</ul>
		</div>
	);
};

export default ServicesList;
