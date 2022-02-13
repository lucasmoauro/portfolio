export const Bin = () => {
	return (
		<div className="bin">
			<div className="bin__top">
				<span>Recycle Bin</span>
				<button>X</button>
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
					</div>
				</div>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	);
};
