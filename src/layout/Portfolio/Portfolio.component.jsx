import React from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem.component";

const works = [
	{
		category: "Branding",
		title: "Windows in The City",
		caption:
			"Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
		link: "#",
		image: "images/portfolio/gallery/g-windows-in-the-city.jpg",
	},
	{
		category: "Branding",
		title: "Windows in The City",
		caption:
			"Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
		link: "#",
		image: "images/portfolio/gallery/g-windows-in-the-city.jpg",
	},
	{
		category: "Branding",
		title: "Windows in The City",
		caption:
			"Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
		link: "#",
		image: "images/portfolio/gallery/g-windows-in-the-city.jpg",
	},
	{
		category: "Branding",
		title: "Windows in The City",
		caption:
			"Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
		link: "#",
		image: "images/portfolio/gallery/g-windows-in-the-city.jpg",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio" className="s-portfolio target-section">
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
