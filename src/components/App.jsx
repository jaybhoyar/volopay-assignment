import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Common/Header";
import SubHeader from "./Common/SubHeader";
import Cards from "./Cards";

const BASE_URL = "https://volopayserver.glitch.me";

const App = () => {
	const [cards, setCards] = useState([]);
	const [filter, setFilter] = useState();
	const [searchTerm, setSearchTerm] = useState("");
	let page = 1;

	const fetchCards = async () => {
		try {
			const url = filter
				? `${BASE_URL}/cards?_card_type=${filter}&_page=${page}`
				: `${BASE_URL}/cards?q=${searchTerm}&_page=${page}`;
			const { data } = await axios.get(url);
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
				<Cards
					cards={cards}
					setCards={setCards}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					filter={filter}
					setFilter={setFilter}
					fetchCards={fetchCards}
				/>
			</div>
		</div>
	);
};

export default App;
