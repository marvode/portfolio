import React from "react";

const Position = ({ company, role, time, summary }) => {
	return (
		<div className="column" data-aos="fade-up">
			<div className="position">
				<div className="position__header">
					<h6>
						<span className="position__co">{company}</span>
						<span className="position__pos">{role}</span>
					</h6>
					<div className="position__timeframe">{time}</div>
				</div>

				<p>{summary}</p>
			</div>
		</div>
	);
};

export default Position;
