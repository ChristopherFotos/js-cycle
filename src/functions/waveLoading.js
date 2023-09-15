// TODO: add intra-week range ascending/descending of training variables

const waveLoading = ({
	programLength = 3,
	blockLength = 4,
	weightIncrement = 5,
	startingWeight = 50,
	deloadIncrement = 5,
	maxWeight = Infinity,
	startingReps = 5,
	repDeloadIncrement = 1,
	setsDeloadIncrement = 1,
	startingSets = 5,
	setsIncrement = 1,
	repsIncrement = 1,
	maxReps = 10,
	maxSets = 15,
}) => {
	const blocks = [];

	for (let block = 0; block <= programLength - 1; block++) {
		blocks.push({
			weights: [startingWeight + deloadIncrement * block],
			sets: [startingSets + setsDeloadIncrement * block],
			reps: [startingReps + repDeloadIncrement * block],
		});

		for (let week = 0; week <= blockLength - 2; week++) {
			let newWeight = blocks[block].weights[0] + weightIncrement * (week + 1);
			newWeight < maxWeight
				? blocks[block].weights.push(newWeight)
				: blocks[block].weights.push(maxWeight);

			let newSet = blocks[block].sets[0] + setsIncrement * (week + 1);
			newSet < maxSets
				? blocks[block].sets.push(newSet)
				: blocks[block].sets.push(maxSets);

			let newRep = blocks[block].reps[0] + repsIncrement * (week + 1);
			newRep < maxReps
				? blocks[block].reps.push(newRep)
				: blocks[block].reps.push(maxReps);
		}
	}

	return blocks;
};

export default waveLoading;
