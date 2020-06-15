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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
