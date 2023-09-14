const programGenerator = (movements, length) => {
	const program = [];

	// Push a bunch of empty weeks into the program to be filled later
	for (let i = 0; i < length; i++) {
		const newWeek = [];
		for (let i = 0; i < 7; i++) {
			newWeek[i] = [];
		}
		program.push(newWeek);
	}

	movements.forEach((movement) => {
		let weights = [];
		let sets = [];
		let reps = [];

		movement.progression.forEach((progression) => {
			weights = [...weights, ...progression.weights];
			sets = [...sets, ...progression.sets];
			reps = [...reps, ...progression.reps];
		});

		movement.days.forEach((day) => {
			program.forEach((week, i) => {
				week[day].push({
					movement: movement.name,
					weight: weights[i],
					sets: sets[i],
					reps: reps[i],
				});
			});
		});
	});

	return program;
};

export default programGenerator;
