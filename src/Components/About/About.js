import { Link } from "react-router-dom";

export const About = () => {

	return (
		<div className="bin">
			<div className="bin__top">
				<span>About Me</span>
				<Link to="/">X</Link>
			</div>
			<div className="bin__middle">
				<div className="bin__placeholders">
					<span>File</span>
					<span>Computer</span>
					<span>View</span>
				</div>
				<div className="trash">
					<div className="trash__container"></div>
				</div>
			</div>
		</div>
	);
};
