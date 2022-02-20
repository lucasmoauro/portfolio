import { Navigate, Route, Routes } from "react-router-dom";
import { Error } from "../404/Error";
import { About } from "../About/About";
import { Bin } from "../Bin/Bin";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Projects } from "../Projects/Projects";
import { Sections } from "../Sections/Sections";

export const AppRouter = () => {
	return (
		<Routes>
			<Route exact path="/bin" element={<Bin />} />
			<Route exact path="/about" element={<About />} />
			<Route exact path="/projects" element={<Projects />} />
			<Route exact path="/projects/recetas" element={<Project />} />
			<Route exact path="/projects/glasslogin" element={<Project />} />
			<Route exact path="/contact" element={<Contact />} />
			<Route exact path="/404" element={<Error />} />
			<Route exact path="/" element={<Sections />} />
			<Route path="/*" element={<Navigate to="/404" />} />
		</Routes>
	);
};
