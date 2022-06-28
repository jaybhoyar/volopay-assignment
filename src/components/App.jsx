import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import SubHeader from "./SubHeader";
import Cards from "./Cards";

const BASE_URL = "http://localhost:3500";

const App = () => {
	const [cards, setCards] = useState([]);
	let page = 1;

	const fetchCards = async () => {
		try {
			const { data } = await axios.get(`${BASE_URL}/cards?_page=${page}`);
			const newCards = data;

			setCards((oldCards) => [...oldCards, ...newCards]);
			page += 1;
		} catch (error) {
			console.log(error);
		}
	};

	const handleScroll = (e) => {
		const windowEvent = e.target.documentElement;
		if (
			windowEvent.scrollTop + window.innerHeight + 10 >=
			windowEvent.scrollHeight
		) {
			fetchCards();
		}
	};

	useEffect(() => {
		fetchCards();
		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="w-full h-screen p-12">
			<div className="w-9/12 mx-auto">
				<Header />
				<SubHeader />
				<Cards cards={cards} />
			</div>
		</div>
	);
};

export default App;
