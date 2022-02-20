import { Link } from "react-router-dom";

export const Projects = () => {
	return (
		<div className="bin bin-fadeIn">
			<div className="bin__top">
				<span>Projects</span>
				<Link to="/">X</Link>
			</div>
			<div className="bin__middle">
				<div className="bin__placeholders">
					<span>File</span>
					<span>Computer</span>
					<span>View</span>
				</div>
				<div className="window">
					<div className="window__grid-projects">
							<Link to="/projects/recetas" className="window__section">
								<img src="/images/folder.png" alt="recetas app" />
								<div>
									<span>Recetas</span>
								</div>
							</Link>
							<Link to="/projects/glasslogin" className="window__section">
								<img src="/images/folder.png" alt="" />
								<div>
									<span>GlassLogin</span>
								</div>
							</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
