import React, { useState } from "react";
import { BiSearch, BiFilter } from "react-icons/bi";
import List from "./List";

function index({
	cards,
	searchTerm,
	setSearchTerm,
	setCards,
	filter,
	setFilter,
	fetchCards,
}) {
	const [showFilterOptions, setShowFilterOptions] = useState(false);

	const handleSubmit = () => {
		setCards([]);
		setShowFilterOptions(false);
		fetchCards();
	};

	const handleReset = () => {
		setFilter();
		fetchCards();
	};
	const handleChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<div className="my-5 w-full relative">
			<div className="flex flex-reverse justify-end items-center mb-8">
				<div className="flex items-center">
					<div className="relative mr-3">
						<input
							type="text"
							className="py-1 px-3 w-48 rounded text-sm border focus:outline-none text-gray-600 focus:border-gray-600"
							placeholder="Card name . . ."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<BiSearch
							className="absolute top-2 right-3 text-base"
							onClick={handleSubmit}
						/>
					</div>

					<button
						onClick={() =>
							setShowFilterOptions((current) => !current)
						}
						className="peer text-sm py-1.5 px-4 flex items-center text-gray-500 rounded-md bg-gray-100"
					>
						<BiFilter className="mr-1.5 text-xl" />
						Filter
					</button>
				</div>
				{showFilterOptions && (
					<div className="absolute z-50 top-8 right-0 border border-gray-200 w-5/12 rounded bg-white shadow-lg text-sm">
						<h3 className="py-3 px-4 text-left text-gray-700 border-b border-gray-100 ">
							Filters
						</h3>
						<div className="py-3 px-6">
							<h5 className="text-left text-gray-400 mb-3">
								Type
							</h5>
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center w-6/12">
									<input
										className="h-4 w-4 border border-gray-50 button-shadow rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mr-2 cursor-pointer"
										type="radio"
										value="subscription"
										checked={filter === "subscription"}
										onChange={handleChange}
									/>
									<label
										className="text-gray-800"
										for="flexCheckDefault"
									>
										Subscription
									</label>
								</div>
								<div className="flex items-center w-6/12">
									<input
										className="h-4 w-4 border border-pink-50 button-shadow rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mr-2 cursor-pointer"
										type="radio"
										value="burner"
										checked={filter === "burner"}
										onChange={handleChange}
									/>
									<label
										className="text-gray-800"
										for="flexCheckDefault"
									>
										Burner
									</label>
								</div>
							</div>

							<h5 className="text-left text-gray-400 my-3">
								Cardholder
							</h5>
							<div className="mb-6">
								<select className="form-select appearance-none block w-full p-3 text-gray-700 bg-gray-50 rounded focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none">
									<option selected>Select Cardholder</option>
								</select>
							</div>
							<div className="flex justify-between text-sm">
								<button
									onClick={handleSubmit}
									className="py-1.5 w-5/12 rounded-md text-center text-white bg-primary-red"
								>
									Apply
								</button>
								<button
									onClick={handleReset}
									className="py-1.5 w-5/12 rounded-md text-center text-gray-800 button-shadow"
								>
									Clear
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
			<List cards={cards} />
		</div>
	);
}

export default index;
