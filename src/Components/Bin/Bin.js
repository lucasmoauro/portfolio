import { Link } from "react-router-dom";

export const Bin = () => {
	return (
		<div className="bin bin-fadeIn">
			<div className="bin__top">
				<span>Recycle Bin</span>
				<Link to="/">X</Link>
			</div>
			<div className="bin__middle">
				<div className="bin__placeholders">
					<span>File</span>
					<span>Computer</span>
					<span>View</span>
				</div>
				<div className="window">
					<div className="window__grid">
						<div className="window__section">
							<img src="/images/folder.png" alt="" />
							<span>system32</span>
						</div>
						<div className="window__section">
							<img src="/images/paint.png" alt="" />
							<span>portfolio</span>
						</div>
						<div className="window__section">
							<img src="/images/notepad.png" alt="" />
							<span>to-do list</span>
						</div>
						<div className="window__section">
							<img src="/images/folder.png" alt="" />
							<span>secret project(4)</span>
						</div>
						<div className="window__section">
							{/* TODO:
								foto de mochi onclick
							*/}
							<img src="/images/folder.png" alt="" />
							<span>mochi</span>
						</div>
						<div className="window__section">
							<img src="/images/paint.png" alt="" />
							<span>untitled</span>
						</div>
						<div className="window__section">
							<img src="/images/notepad.png" alt="" />
							<span>chores list</span>
						</div>
						<div className="window__section">
							<img src="/images/folder.png" alt="" />
							<span>real secret project</span>
						</div>
						<div className="window__section">
							<img src="/images/folder.png" alt="" />
							<span>rand stuff</span>
						</div>
						<div className="window__section">
							<img src="/images/paint.png" alt="" />
							<span>drawing</span>
						</div>
						<div className="window__section">
							<img src="/images/notepad.png" alt="" />
							<span>wishes</span>
						</div>
						<div className="window__section">
							<img src="/images/folder.png" alt="" />
							<span>images</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
