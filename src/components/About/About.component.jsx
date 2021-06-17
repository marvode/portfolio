import React from "react";
import Career from "../Career/Career.component";

const About = () => {
	return (
		<section id="about" className="s-about target-section">
			<div className="s-about__section s-about__section--profile">
				<div className="right-vert-line"></div>

				<div className="row">
					<div className="column large-6 medium-8 tab-full">
						<div
							className="section-intro"
							data-num="01"
							data-aos="fade-up"
						>
							<h3 className="subhead">About Me</h3>
							<h1 className="display-1">
								I'm the kind of person who isn't afraid of
								challenges.
							</h1>
						</div>

						<div className="profile-pic" data-aos="fade-up">
							<img
								src="images/profile-pic.jpg" alt=""
								style={{ width: "100%" }}
							/>
						</div>

						<h3 data-aos="fade-up">Profile</h3>

						<p data-aos="fade-up">
							Knowledgeable and skilled Full Stack Developer versed in a number of programming tools and languages. Proficient in both backend and frontend development. Hardworking, focused, analytical and resourceful problem-solver with disciplined approach and skill in producing clean, robust code.
						</p>
					</div>
				</div>
			</div>

			<Career />
		</section>
	);
};

export default About;
