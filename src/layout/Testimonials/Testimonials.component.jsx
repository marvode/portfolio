import React from "react";
import Testimonial from "../../components/Testimonial/Testimonial.component";

const testimonials = [
	{
		name: "Sundar Pichar",
		company: "Google",
		details:
			"Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur  molestias delectus culpa.",
	},
	{
		name: "Sundar Pichar",
		company: "Google",
		details:
			"Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur  molestias delectus culpa.",
	},
	{
		name: "Sundar Pichar",
		company: "Google",
		details:
			"Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur  molestias delectus culpa.",
	},
	{
		name: "Sundar Pichar",
		company: "Google",
		details:
			"Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur  molestias delectus culpa.",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="s-testimonials">
			<div className="row collapse">
				<div className="column large-full">
					<div className="testimonial-slider" data-aos="fade-up">
						{testimonials.map((testimonial, i) => (
							<Testimonial key={i} {...testimonial} />
						))}
						<div className="testimonial-slider__slide">
							<p>
								Nunc interdum lacus sit amet orci. Vestibulum
								dapibus nunc ac augue. Fusce vel dui. In ac
								felis quis tortor malesuada pretium. Curabitur
								vestibulum aliquam leo. Qui sed at corrupti
								expedita voluptas odit. Nihil ea quia nesciunt.
								Ducimus aut sed ipsam.
							</p>
							<div className="testimonial-slider__author">
								<img
									src="images/avatars/user-05.jpg"
									alt="Author image"
									className="testimonial-slider__avatar"
								/>
								<cite className="testimonial-slider__cite">
									<strong>Jeff Bezos</strong>
									<span>CEO, Amazon</span>
								</cite>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
