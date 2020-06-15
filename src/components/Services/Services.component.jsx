import React from "react";
import ServicesList from "../../components/ServicesList/ServicesList.component";

const Services = () => {
	return (
		<section id="services" className="s-services target-section h-dark-bg">
			<div className="row s-services__content">
				<div className="vert-line"></div>

				<div className="column large-6 s-services__leftcol">
					<div
						className="section-intro"
						data-num="02"
						data-aos="fade-up"
					>
						<h3 className="subhead">Expertise</h3>

						<h1 className="display-1">
							I focus on crafting web experiences and designs that
							works.
						</h1>
					</div>

					<p className="lead" data-aos="fade-up">
						Suspendisse eu ligula. Duis arcu tortor, suscipit eget,
						imperdiet nec, imperdiet iaculis, ipsum. Nulla facilisi.
						Etiam rhoncus. Praesent blandit laoreet nibh. Donec quam
						felis, ultricies nec, pellentesque eu, pretium quis,
						sem. Cras sagittis. Praesent egestas tristique nibh.
					</p>
				</div>

				<ServicesList />
			</div>
		</section>
	);
};

export default Services;
