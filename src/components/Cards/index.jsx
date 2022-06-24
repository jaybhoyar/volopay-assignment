import React from "react";
import { BiSearch, BiFilter } from "react-icons/bi";

function index() {
	return (
		<div className="my-5">
			<div className="flex flex-reverse justify-end items-center">
				<div className="flex items-center">
					<BiSearch className="text-base mr-3" />
					<button className="text-sm py-1.5 px-4 flex items-center text-gray-500 rounded-md bg-gray-100">
						<BiFilter className="mr-1.5 text-xl" />
						Filter
					</button>
				</div>
			</div>
		</div>
	);
}

export default index;
