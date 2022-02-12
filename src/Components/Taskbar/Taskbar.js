import moment from "moment-timezone";
import { useState } from "react";

export const Taskbar = () => {
	const guess = moment.tz.guess();
	const [clock, setClock] = useState(moment.tz(guess).format("h:mm a"));

	setInterval(() => {
		const time = moment.tz(guess).format("h:mm a");
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
