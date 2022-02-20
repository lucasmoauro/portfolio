import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../Components/Router/AppRouter";
import { Sections } from "../Components/Sections/Sections";
import { Taskbar } from "../Components/Taskbar/Taskbar";

export const Home = () => {
	return (
		<BrowserRouter>
			<Sections />
			<AppRouter />
			<Taskbar />
		</BrowserRouter>
	);
};
