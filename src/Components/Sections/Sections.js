import { Link} from "react-router-dom";


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
