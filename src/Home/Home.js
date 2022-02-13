import { BrowserRouter } from "react-router-dom";
import { Sections } from "../Components/Sections/Sections";
import { Taskbar } from "../Components/Taskbar/Taskbar";

export const Home = () => {
	return (
		<div>
			<BrowserRouter>
				<Sections />
				<Taskbar />
			</BrowserRouter>
		</div>
	);
};
