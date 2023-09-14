import waveLoading from './functions/waveLoading';
import programGenerator from './functions/programGenerator';

const squat = {
	name: 'squat',
	days: [1, 3, 5],
	progression: waveLoading({
		startingWeight: 170,
		blockLength: 4,
		programLength: 3,
		weightIncrement: 10,
		deloadIncrement: 5,
		maxWeight: 300,
		startingReps: 5,
		repDeloadIncrement: 0,
		setsDeloadIncrement: 0,
		startingSets: 3,
		setsIncrement: 1,
		repsIncrement: 1,
		maxReps: 15,
		maxSets: 10,
	}),
};

const bench = {
	name: 'bench',
	days: [2, 4, 6],
	progression: waveLoading({
		startingWeight: 135,
		blockLength: 4,
		programLength: 3,
		weightIncrement: 10,
		deloadIncrement: 5,
		maxWeight: 300,
		repDeloadIncrement: 0,
		setsDeloadIncrement: 0,
		startingSets: 3,
		startingReps: 5,
		setsIncrement: 1,
		repsIncrement: 1,
		maxReps: 15,
		maxSets: 10,
	}),
};

const deadlift = {
	name: 'deadlift',
	days: [2, 4, 6],
	progression: waveLoading({
		startingWeight: 240,
		blockLength: 4,
		programLength: 3,
		weightIncrement: 10,
		deloadIncrement: 5,
		maxWeight: Infinity,
		startingReps: 5,
		repDeloadIncrement: 1,
		setsDeloadIncrement: 1,
		startingSets: 3,
		setsIncrement: 1,
		repsIncrement: 1,
		maxReps: 15,
		maxSets: 10,
	}),
};

const program = programGenerator([squat, bench, deadlift], 12);
console.log('squat:', squat);
console.log('PROGRAM: ', program);
