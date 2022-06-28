import React from "react";
import Card from "./Card";

function List({ cards }) {
	return (
		<div className="flex flex-wrap items-center justify-between">
			{cards.length >= 1 &&
				cards.map((card, index) => {
					return <Card index={index} card={card} />;
				})}
		</div>
	);
}

export default List;
