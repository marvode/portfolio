import React from "react";

const Footer = () => {
	return (
		<footer className="s-footer h-dark-bg">
			<div className="right-vert-line"></div>

			<div className="row s-footer__main">
				<div className="column large-6">
					<div className="section-intro" data-aos="fade-up">
						<h3 className="subhead">Get In Touch</h3>

						<h1 className="display-1">
							Have an idea or a concept that really excite you?
							Let's turn that idea into reality. Shoot me a
							message.
						</h1>
					</div>

					<div className="footer-email-us">
						<a
							href="mailto:odemwingiemarv@gmail.com"
							className="btn btn--primary h-full-width"
						>
							Let's Talk
						</a>
					</div>
				</div>

				<div className="column large-5">
					<div className="footer-contacts">
						<div
							className="footer-contact-block"
							data-aos="fade-up"
						>
							<h5 className="footer-contact-block__header">
								Email
							</h5>
							<p className="footer-contact-block__content">
								<a href="mailto:odemwingiemarv@gmail.com">odemwingiemarv@gmail.com</a>
							</p>
						</div>
						<div
							className="footer-contact-block"
							data-aos="fade-up"
						>
							<h5 className="footer-contact-block__header">
								Whatsapp
							</h5>
							<p className="footer-contact-block__content">
								<a href="https://api.whatsapp.com/send?phone=2348139161877">+234 813 916 1877</a>
							</p>
						</div>
						<br />
						<div
							className="footer-contact-block"
							data-aos="fade-up"
						>
							<h5 className="footer-contact-block__header">
								Social
							</h5>
							<ul className="footer-contact-block__list">
								<li>
									<a href="https://twitter.com/marv_odemwingie">Twitter</a>
								</li>
								<li>
									<a href="https://github.com/marvode">Github</a>
								</li>
								<li>
									<a href="https://www.linkedin/in/marv-ode">LinkedIn</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="row s-footer__bottom">
				<div className="ss-go-top">
					<a className="smoothscroll" title="Back to Top" href="#top">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M12 0l8 9h-6v15h-4v-15h-6z" />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
