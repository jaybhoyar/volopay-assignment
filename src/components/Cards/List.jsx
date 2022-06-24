import React from "react";
import Card from "./Card";

function List() {
	return (
		<div className="flex flex-wrap items-center justify-between">
			{[0, 1, 2].map((i) => {
				return <Card index={i} />;
			})}
		</div>
	);
}

export default List;
