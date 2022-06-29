import React from "react";
import { RiVidiconLine } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";

const Header = () => {
	return (
		<div className="flex items-center justify-between mb-16">
			<div className="flex items-center justify-center">
				<p className="text-3xl font-semibold">Virtual Cards</p>
				<div className="flex items-center text-sm text-blue-600 ml-1.5 px-1 py-0.5 bg-gray-100 rounded-md">
					<RiVidiconLine />
					<span className="ml-1.5 text-sm">Learn more</span>
				</div>
			</div>
			<div>
				<div className="flex items-center text-sm px-3 py-1.5 rounded button-shadow">
					<HiPlus className="mr-2 text-base" />
					<p>Virtual Card</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
