import moment from "moment-timezone";
import { useState } from "react";

export const Taskbar = () => {
	const guess = moment.tz.guess();
	const time = moment.tz(guess).format("h:mm a");
	const [clock, setClock] = useState(time);

	//TODO: Ver de usar clearInterval()

	setInterval(() => {
		setClock(time);
	}, 60000);

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
					<span className="">{clock}</span>
				</div>
			</div>
		</div>
	);
};
