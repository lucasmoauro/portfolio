import { useNavigate } from "react-router-dom";

export const Error = () => {
	const navigate = useNavigate();
	const handlePress = () => {
		// console.log(e.key)
		navigate("/");
	};
	return (
		<div className="error" onClick={handlePress}>
			<div></div>
		</div>
	);
};
