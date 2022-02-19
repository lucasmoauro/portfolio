import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
	return (
		<div className="bin">
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
											value="localhost:3000/contact"
										/>
										<input
											type="hidden"
											name="_subject"
											value="Contacto Portfolio"
										/>
										<input type="hidden" name="_template" value="basic"></input>
									</div>
									<button type="submit" className="contact__button">
										Send
									</button>
								</form>

								<div className="contact__icons">
									<span>Or you can connect with me:</span>
									<div className="icons">
										<div className="prueba2">
											<a
												href="https://www.linkedin.com/in/lucas-moauro/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													className="prueba"
													src="/images/linkedin.png"
													alt="LinkedIn profile"
												/>
											</a>
										</div>

										<div className="prueba2">
											<a
												href="mailto:lmoauro6@gmail.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													className="prueba"
													src="/images/gmail.png"
													alt="LinkedIn profile"
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
