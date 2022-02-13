import { useState } from "react";

export const Bin = () => {
	const [isClosed, setIsClosed] = useState(false);

	const handleClose = () => {
		setIsClosed(!isClosed);
	};

	return (
		<div className={`bin ${isClosed ? "closed" : null}`}>
			<div className="bin__top">
				<span>Recycle Bin</span>
				<button onClick={handleClose}>X</button>
			</div>
			<div className="bin__middle">
				<div className="bin__placeholders">
					<span>File</span>
					<span>Computer</span>
					<span>View</span>
				</div>
				<div className="trash">
					<div className="trash__container">
						<div className="trash__section">
							{/* TODO:
								AGREGAR FN QUE TIRE PANTALLAZO AZUL ON CLICK A SYS32
							*/}
							<img src="/images/folder.png" alt="" />
							<span>system32</span>
						</div>
						<div className="trash__section">
							<img src="/images/paint.png" alt="" />
							<span>portfolio</span>
						</div>
						<div className="trash__section">
							<img src="/images/notepad.png" alt="" />
							<span>to-do list</span>
						</div>
						<div className="trash__section">
							<img src="/images/folder.png" alt="" />
							<span>secret project(4)</span>
						</div>
						<div className="trash__section">
							{/* TODO:
								foto de mochi onclick
							*/}
							<img src="/images/folder.png" alt="" />
							<span>mochi</span>
						</div>
						<div className="trash__section">
							<img src="/images/paint.png" alt="" />
							<span>untitled</span>
						</div>
						<div className="trash__section">
							<img src="/images/notepad.png" alt="" />
							<span>chores list</span>
						</div>
						<div className="trash__section">
							<img src="/images/folder.png" alt="" />
							<span>real secret project</span>
						</div>
						<div className="trash__section">
							<img src="/images/folder.png" alt="" />
							<span>rand stuff</span>
						</div>
						<div className="trash__section">
							<img src="/images/paint.png" alt="" />
							<span>drawing</span>
						</div>
						<div className="trash__section">
							<img src="/images/notepad.png" alt="" />
							<span>wishes</span>
						</div>
						<div className="trash__section">
							<img src="/images/folder.png" alt="" />
							<span>images</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	);
};
