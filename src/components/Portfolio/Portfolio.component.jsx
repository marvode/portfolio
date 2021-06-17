import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem.component";

const works = [
	{
		category: "Web Development",
		title: "Thankyz Services",
		caption:
			"Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
		link: "https://thankyzservices.com.ng",
		image: "images/portfolio/work1.png",
	},
	{
		category: "Web Development",
		title: "Windows in The City",
		caption:
			"Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
		link: "#",
		image: "images/portfolio/gallery/g-windows-in-the-city.jpg",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio" className="s-portfolio target-section" style={{ paddingBottom: '15rem' }}>
			<div className="row s-portfolio__header">
				<div className="column large-6 medium-8 tab-full">
					<div
						className="section-intro"
						data-num="03"
						data-aos="fade-up"
					>
						<h3 className="subhead">Portfolio</h3>
						<h1 className="display-1">
							A selection of recent projects I have worked on.
						</h1>
					</div>
				</div>
			</div>

			<div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">
				{works.map((work, i) => (
					<PortfolioItem key={i} {...work} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
