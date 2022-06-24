import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillAppstore } from "react-icons/ai";

function SubHeader() {
	return (
		<div className="font-medium text-center text-gray-500 flex items-center justify-between border-b border-gray-200">
			<ul className="text-sm flex flex-wrap">
				<li className="mr-2">
					<a
						href="#"
						className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
					>
						Your
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block p-4 text-gray-900 rounded-t-lg border-b-2 border-pink-500 active dark:text-blue-500 dark:border-blue-500"
					>
						All
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block p-4 text-pink-500 rounded-t-lg border-b-2 border-pink-500 active dark:text-pink-500 dark:border-pink-500"
					>
						Blocked
					</a>
				</li>
			</ul>
			<div className="text-xl flex items-center">
				<AiFillAppstore className="mr-3" />
				<GiHamburgerMenu />
			</div>
		</div>
	);
}

export default SubHeader;
