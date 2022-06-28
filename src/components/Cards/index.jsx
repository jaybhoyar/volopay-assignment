import React from "react";
import { BiSearch, BiFilter } from "react-icons/bi";
import List from "./List";

function index({ cards }) {
	return (
		<div className="my-5 w-full">
			<div className="flex flex-reverse justify-end items-center mb-8">
				<div className="flex items-center">
					<BiSearch className="text-base mr-3" />
					<button className="text-sm py-1.5 px-4 flex items-center text-gray-500 rounded-md bg-gray-100">
						<BiFilter className="mr-1.5 text-xl" />
						Filter
					</button>
				</div>
			</div>
			<List cards={cards} />
		</div>
	);
}

export default index;
