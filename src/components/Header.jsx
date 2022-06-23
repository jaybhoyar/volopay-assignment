import React from "react";

const Header = () => {
	return (
		<div className="flex w-9/12 items-center justify-between mx-auto pb-16">
			<div className="flex items-center justify-center">
				<p className="text-3xl font-semibold">Virtual Cards</p>
				<span className="text-sm text-blue-500 ml-1.5 px-1 py-0.5 bg-gray-100 rounded-md">
					Learn more
				</span>
			</div>
			<div>
				<button className="flex items-center px-3 py-0.5 rounded-md button-shadow">
					<span className="text-3xl px-2">+</span>
					Virtual Card
				</button>
			</div>
		</div>
	);
};

export default Header;
