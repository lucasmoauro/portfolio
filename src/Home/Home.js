import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../Components/Router/AppRouter";
import { Sections } from "../Components/Sections/Sections";

export const Home = () => {
	return (
		<BrowserRouter>
			<Sections />
			<AppRouter />
		</BrowserRouter>
	);
};
