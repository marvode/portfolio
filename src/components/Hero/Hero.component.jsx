import React from "react";
import Link from "../Link/Link.component";

const socialLinks = [
	{
		placeholder: "Twitter",
		href: "#",
		title: "",
	},
	{
		placeholder: "Facebook",
		href: "#",
		title: "",
	},
	{
		placeholder: "Github",
		href: "#",
		title: "",
	},
	{
		placeholder: "LinkedIn",
		href: "#",
		title: "",
	},
];

const Hero = () => {
	return (
		<section
			id="hero"
			className="s-hero target-section"
			data-parallax="scroll"
			data-image-src="images/hero-bg-3000.jpg"
			data-natural-width="3000"
			data-natural-height="2000"
			data-position-y="center"
		>
			<div className="row hero-content">
				<div className="column large-full">
					<h1>
						Hello, I'm John Doe, <br />
						a frontend developer <br />
						& designer currently <br />
						based somewhere.
					</h1>

					<ul className="hero-social">
						{socialLinks.map((social, i) => (
							<Link key={i} {...social} />
						))}
					</ul>
				</div>
			</div>

			<div className="hero-scroll">
				<a href="#about" className="scroll-link smoothscroll">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M12 24l-8-9h6v-15h4v15h6z" />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Hero;
