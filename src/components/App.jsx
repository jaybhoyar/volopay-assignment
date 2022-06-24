import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Cards from "./Cards";

const App = () => {
	return (
		<div className="w-full h-screen p-12">
			<div className="w-9/12 mx-auto">
				<Header />
				<SubHeader />
				<Cards />
			</div>
		</div>
	);
};

export default App;
