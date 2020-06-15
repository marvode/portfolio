import React from "react";
import Career from "../../components/Career/Career.component";

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
								src="images/profile-pic.jpg"
								srcSet="
									images/profile-pic.jpg    1x,
									images/profile-pic@2x.jpg 2x
								"
								alt=""
							/>
						</div>

						<h3 data-aos="fade-up">Profile</h3>

						<p data-aos="fade-up">
							In consectetuer turpis ut velit. Praesent metus
							tellus, elementum eu, semper a, adipiscing nec,
							purus. Vestibulum ante ipsum primis in faucibus orci
							luctus et ultrices posuere cubilia Curae; In ac dui
							quis mi consectetuer lacinia. Fusce neque. Curabitur
							nisi. Suspendisse nisl elit, rhoncus eget, elementum
							ac, condimentum eget, diam. Phasellus magna. Duis
							arcu tortor, suscipit eget, imperdiet nec, imperdiet
							iaculis, ipsum. Maecenas egestas arcu quis ligula
							mattis placerat. Suspendisse pulvinar, augue ac
							venenatis condimentum, sem libero volutpat nibh, nec
							pellentesque velit pede quis nunc.
						</p>
					</div>
				</div>
			</div>

			<Career />
		</section>
	);
};

export default About;
