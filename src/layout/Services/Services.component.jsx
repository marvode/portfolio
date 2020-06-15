import React from "react";
import ServicesList from "../../components/ServicesList/ServicesList.component";

const Services = () => {
	return (
		<section id="services" class="s-services target-section h-dark-bg">
			<div class="row s-services__content">
				<div class="vert-line"></div>

				<div class="column large-6 s-services__leftcol">
					<div class="section-intro" data-num="02" data-aos="fade-up">
						<h3 class="subhead">Expertise</h3>

						<h1 class="display-1">
							I focus on crafting web experiences and designs that
							works.
						</h1>
					</div>

					<p class="lead" data-aos="fade-up">
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
