export const spentToAvailableCalculator = (spent, available) => {
	const total = spent + available;
	const spentPer = (spent / total) * 100;

	return [spentPer, 100 - spentPer];
};
