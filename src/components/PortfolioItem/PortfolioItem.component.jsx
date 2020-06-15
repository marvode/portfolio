import React from "react";

const PortfolioItem = ({ category, title, caption, link, image }) => {
	return (
		<div className="column" data-aos="fade-up">
			<div className="folio-item">
				<div className="folio-item__thumb">
					<a
						className="folio-item__thumb-link"
						href={image}
						title={title}
						data-size="1050x700"
					>
						<img
							src={image}
							srcSet={
								" " +
								{ image } +
								" 1x, " +
								{ image } +
								"@2x 2x "
							}
							alt=""
						/>
					</a>
				</div>
				<div className="folio-item__info">
					<div className="folio-item__cat">{category}</div>
					<h4 className="folio-item__title">{title}</h4>
				</div>
				<a
					href={link}
					title="Project Link"
					className="folio-item__project-link"
				>
					Project Link
				</a>
				<div className="folio-item__caption">
					<p>{caption}</p>
				</div>
			</div>
		</div>
	);
};

export default PortfolioItem;
