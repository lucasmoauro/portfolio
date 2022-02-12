import moment from "moment-timezone";

export const Taskbar = () => {
	const guess = moment.tz.guess();

	const time = moment.tz(guess).format("h:mm a");

	return (
		<div className="taskbar">
			<div className="taskbar__container">
				<div className="taskbar__button">
					<img
						src="/images/windows.png"
						alt="windows logo"
						className="taskbar__image"
					/>
					<span>Start</span>
				</div>
				<div className="taskbar__timebox">
					<span className="">{time}</span>
				</div>
			</div>
		</div>
	);
};
