import { Link, Route, Routes } from "react-router-dom";
import { Bin } from "../Bin/Bin";

export const Sections = () => {
	return (
		<div className="section">
			<Link to="/bin" className="section__container">
				<img src="/images/bin.png" alt="Bin" />
				<span>Recycle Bin</span>
			</Link>
			<div className="section__container">
				<img src="/images/my_pc.png" alt="About Me" />
				<span>About Me</span>
			</div>
			<div className="section__container">
				<img src="/images/folder.png" alt="Projects" />
				<span>Projects</span>
			</div>
			<div className="section__container">
				<img src="/images/explorer.png" alt="Contact Me" />
				<span>Contact Me</span>
			</div>

			<Routes>
				<Route path="/bin" element={<Bin />} />
			</Routes>
		</div>
	);
};
