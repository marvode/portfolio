import React from "react";
import Position from "../Position/Position.component";

const career = [
	{
		company: "Google",
		role: "Product Designer",
		time: "June 2017 - PRESENT",
		summary:
			"Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.",
	},
	{
		company: "Google",
		role: "Product Designer",
		time: "June 2017 - PRESENT",
		summary:
			"Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.",
	},
	{
		company: "Google",
		role: "Product Designer",
		time: "June 2017 - PRESENT",
		summary:
			"Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.",
	},
	{
		company: "Google",
		role: "Product Designer",
		time: "June 2017 - PRESENT",
		summary:
			"Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.",
	},
];

const Career = () => {
	return (
		<div className="s-about__section">
			<div className="row">
				<div className="column">
					<h3 data-aos="fade-up">Career</h3>
				</div>
			</div>

			<div className="row block-large-1-2 block-900-full work-positions">
				{career.map((job, i) => (
					<Position key={i} {...job} />
				))}
			</div>
		</div>
	);
};

export default Career;
