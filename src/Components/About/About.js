import { Link } from "react-router-dom";

export const About = () => {
	const year = new Date().getFullYear();

	return (
		<div className="bin bin-fadeIn">
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
				<div className="window">
				
					<div className="window__flex">
						<h1 className="window__mainTitle">Hello! I'm Lucas</h1>
						<h2 className="window__subTitle">
							A self-taught frontend dev from Argentina
						</h2>
						<p className="window__paragraph">
							I'm {year - 1993} years old, I live in Buenos Aires with my
							partner and a shih tzu named "Mochi".
						</p>
						<p className="window__paragraph">
							I have been learning web development since 2021 due to covid
							quarantine. I have a passion for learning new things and I'm
							always looking for new challenges. I'm currently learning Node and
							Tailwind in my spare time, hoping that some day i'll become a
							FullStack dev.
						</p>
						<p className="window__paragraph">
							When i'm not coding, you can find me playing videogames, watching
							anime or movies, or playing with my dog.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
