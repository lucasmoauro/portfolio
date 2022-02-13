import { useNavigate } from "react-router-dom";

export const Error = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};
	return (
		<div className="error" onClick={handleClick}>
			<div className="error__container">
				<h2 className="error__title">Oh no! Page Not Found :(</h2>
				<p className="error__paragraph">
					The page you are looking for does not exist
				</p>
				<p className="error__paragraph">
					Click anywhere to go back to the home page!
				</p>
			</div>
		</div>
	);
};
