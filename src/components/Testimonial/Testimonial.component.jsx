import React from "react";

const Testimonial = ({ name, company, details }) => {
	return (
		<div className="testimonial-slider__slide">
			<p>{details}</p>
			<div className="testimonial-slider__author">
				<img
					src="images/avatars/user-01.jpg"
					alt=""
					className="testimonial-slider__avatar"
				/>
				<cite className="testimonial-slider__cite">
					<strong>{name}</strong>
					<span>{company}</span>
				</cite>
			</div>
		</div>
	);
};

export default Testimonial;
