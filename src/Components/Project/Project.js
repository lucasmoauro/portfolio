import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Project = () => {
	const { pathname } = useLocation();

	const split = pathname.split("/");

	//console.log(split[2])

	return (
		<div className="bin">
			<div className="bin__top">
				<span>
					{split[2] === "glasslogin" ? "Glass Login" : " Recetas App"}
				</span>
				<Link to="/">X</Link>
			</div>
			<div className="bin__middle">
				<div className="bin__placeholders">
					<span>File</span>
					<span>Computer</span>
					<span>View</span>
				</div>
				<div className="window ">
					<div className="window__grid-projects window-fadeIn">
						<a
							href={
								split[2] === "glasslogin"
									? "https://github.com/lucasmoauro/GlassLogin"
									: "https://github.com/lucasmoauro/Recetas-React"
							}
							className="window__section"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/images/folder.png" alt="recetas app" />
							<div>
								<span>Github</span>
							</div>
						</a>
						<a
							href={
								split[2] === "glasslogin"
									? "https://glasslogin.netlify.app/"
									: "https://recetas-iag.netlify.app/"
							}
							className="window__section"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/images/folder.png" alt="" />
							<div>
								<span>
									{split[2] === "glasslogin" ? "Glass-Login Page" : " RecetasApp Page"}
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
