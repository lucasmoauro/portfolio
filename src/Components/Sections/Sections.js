import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../Home/Home";
import { Error } from "../404/Error";
import { About } from "../About/About";
import { Bin } from "../Bin/Bin";
import { Projects } from "../Projects/Projects";

export const Sections = () => {
	return (
		<div className="section">
			<Link to="/bin" className="section__container">
				<img src="/images/bin.png" alt="Bin" />
				<span>Recycle Bin</span>
			</Link>
			<Link to="/about" className="section__container">
				<img src="/images/my_pc.png" alt="About Me" />
				<span>About Me</span>
			</Link>
			<Link to="/projects" className="section__container">
				<img src="/images/folder.png" alt="Projects" />
				<span>Projects</span>
			</Link>
			<Link to="/contact" className="section__container">
				<img src="/images/explorer.png" alt="Contact Me" />
				<span>Contact Me</span>
			</Link>
		</div>
	);
};
