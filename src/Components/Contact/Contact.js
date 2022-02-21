import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "../alert/Alert";

export const Contact = () => {
	const handleSubmit = () => {
		Alert();
	};
	return (
		<div className="bin bin-fadeIn">
			<div className="bin__top">
				<span>Contact Me</span>
				<Link to="/">X</Link>
			</div>
			<div className="bin__middle">
				<div className="bin__placeholders">
					<span>File</span>
					<span>Computer</span>
					<span>View</span>
				</div>
				<div className="window">
					<div className="window__container">
						<div className="contact">
							<div className="contact__form">
								<span>Send me a message!</span>
								<form
									action="https://formsubmit.co/600c77039d2811a274ab50f83bf869ff"
									method="POST"
									onSubmit={handleSubmit}
								>
									<div className="contact__field">
										<label htmlFor="name">Name:</label>
										<input
											type="text"
											name="name"
											id="name"
											required
											autoComplete="off"
										/>
									</div>
									<div className="contact__field">
										<label htmlFor="message">Message:</label>
										<textarea
											name="message"
											id="message"
											required
											rows={5}
											cols={30}
											className="contact__textarea"
										/>
									</div>
									<div id="form-config">
										<input
											type="hidden"
											name="_next"
											value="https://lucasmoauro.netlify.app/contact"
										/>
										<input
											type="hidden"
											name="_subject"
											value="Contacto Portfolio"
										/>
										<input type="hidden" name="_template" value="basic" />
										<input type="hidden" name="_captcha" value="false" />
									</div>
									<button type="submit" className="contact__button">
										Send
									</button>
								</form>

								<div className="contact__icons">
									<span>Or you can connect with me:</span>
									<div className="icons">
										<div className="icons__container">
											<a
												href="https://www.linkedin.com/in/lucas-moauro/"
												target="_blank"
												rel="noreferrer"
											>
												<img
													className="icons__image"
													src="/images/linkedin.png"
													alt="LinkedIn profile"
												/>
											</a>
										</div>

										<div className="icons__container">
											<a
												href="mailto:lmoauro6@gmail.com"
												target="_blank"
												rel="noreferrer"
											>
												<img
													className="icons__image"
													src="/images/gmail.png"
													alt="LinkedIn profile"
												/>
											</a>
										</div>
										<div className="icons__container">
											<a
												href="https://github.com/lucasmoauro"
												target="_blank"
												rel="noreferrer"
											>
												<img
													className="icons__image"
													src="/images/github.png"
													alt="github profile"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
