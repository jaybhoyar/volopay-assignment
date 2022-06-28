import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { ImFire } from "react-icons/im";

const Card = ({ card }) => {
	return (
		<figure class="rounded-md p-6 card-container mb-8 shadow-lg border-slate-50">
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<h3 className="text-xl font-medium mb-1.5 leading-none">
						{card.name}
					</h3>
					<div className="flex items-center text-sm text-gray-400">
						<span>{card.owner_name}</span>
						<GoPrimitiveDot className="text-xs mx-1" />
						<span>{card.budget_name}</span>
					</div>
				</div>
				<div>
					<div class="p-4 rounded-full bg-red-50 shadow-md">
						<ImFire className="primary-red text-2xl" />
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between my-4 text-gray-400">
				<button className="text-xs leading-none uppercase rounded px-2 py-0.5 font-medium border border-gray-400">
					{card.card_type}
				</button>
				<div className="text-sm">
					Expires: <span className="">1 May, 23</span>
				</div>
			</div>
			<div className="w-full bg-gray-200 h-2 mb-4 rounded">
				<div className="rounded h-2 bg-green-600 h-1 w-4/12"></div>
			</div>
			<div className="text-base text-gray-800 flex items-center justify-between mb-2">
				<div className="flex items-center">
					<GoPrimitiveDot className="text-xl mx-1 primary-red" />
					Spent
				</div>
				<div>{`${card.spent.value} ${card.spent.currency}`}</div>
			</div>
			<div className="text-base text-gray-800 flex items-center justify-between">
				<div className="flex items-center">
					<GoPrimitiveDot className="text-xl mx-1 text-green-600" />
					Available to spend
				</div>
				<div>{`${card.available_to_spend.value} ${card.available_to_spend.currency}`}</div>
			</div>
		</figure>
	);
};

export default Card;
