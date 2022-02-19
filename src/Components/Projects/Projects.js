import { Link } from "react-router-dom";

export const Projects = () => {



	return (
		<div className="bin">
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
					<div className="window__container"></div>
				</div>
			</div>
		</div>
	);
};
