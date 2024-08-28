const users = {
	12: {
		id: 12,
		userInfos: {
			firstName: 'Karl',
			lastName: 'Dovineau',
			age: 31
		},
		todayScore: 0.12,
		keyData: {
			calorieCount: 1930,
			proteinCount: 155,
			carbohydrateCount: 290,
			lipidCount: 50
		}
	},
	18: {
		id: 18,
		userInfos: {
			firstName: 'John',
			lastName: 'Doe',
			age: 28
		},
		score: 0.5,
		keyData: {
			calorieCount: 3000,
			proteinCount: 100,
			carbohydrateCount: 200,
			lipidCount: 150
		}
	}
}

const activity = {
	12: [
		{ day: '2020-07-01', kilogram: 70, calories: 200 },
		{ day: '2020-07-02', kilogram: 75, calories: 250 },
		{ day: '2020-07-03', kilogram: 65, calories: 180 },
		{ day: '2020-07-04', kilogram: 80, calories: 300 },
		{ day: '2020-07-05', kilogram: 75, calories: 250 },
		{ day: '2020-07-06', kilogram: 70, calories: 200 },
		{ day: '2020-07-07', kilogram: 65, calories: 180 }
	],
	18: [
		{ day: '2020-07-01', kilogram: 80, calories: 220 },
		{ day: '2020-07-02', kilogram: 85, calories: 270 },
		{ day: '2020-07-03', kilogram: 75, calories: 190 },
		{ day: '2020-07-04', kilogram: 90, calories: 320 },
		{ day: '2020-07-05', kilogram: 85, calories: 270 },
		{ day: '2020-07-06', kilogram: 80, calories: 220 },
		{ day: '2020-07-07', kilogram: 75, calories: 190 }
	]
}

const averageSessions = {
	12: [
		{ day: 1, sessionLength: 30 },
		{ day: 2, sessionLength: 23 },
		{ day: 3, sessionLength: 45 },
		{ day: 4, sessionLength: 50 },
		{ day: 5, sessionLength: 0 },
		{ day: 6, sessionLength: 0 },
		{ day: 7, sessionLength: 60 }
	],
	18: [
		{ day: 1, sessionLength: 30 },
		{ day: 2, sessionLength: 40 },
		{ day: 3, sessionLength: 50 },
		{ day: 4, sessionLength: 30 },
		{ day: 5, sessionLength: 30 },
		{ day: 6, sessionLength: 50 },
		{ day: 7, sessionLength: 50 }
	]
}

const performances = {
	12: {
		kind: {
			1: 'cardio',
			2: 'energy',
			3: 'endurance',
			4: 'strength',
			5: 'speed',
			6: 'intensity'
		},
		data: [
			{ value: 80, kind: 1 },
			{ value: 120, kind: 2 },
			{ value: 140, kind: 3 },
			{ value: 50, kind: 4 },
			{ value: 200, kind: 5 },
			{ value: 90, kind: 6 }
		]
	},
	18: {
		kind: {
			1: 'cardio',
			2: 'energy',
			3: 'endurance',
			4: 'strength',
			5: 'speed',
			6: 'intensity'
		},
		data: [
			{ value: 200, kind: 1 },
			{ value: 240, kind: 2 },
			{ value: 80, kind: 3 },
			{ value: 80, kind: 4 },
			{ value: 220, kind: 5 },
			{ value: 110, kind: 6 }
		]
	}
}

export default {
	user: (userId) => users[userId],
	activity: (userId) => activity[userId],
	averageSessions: (userId) => averageSessions[userId],
	performance: (userId) => ({
		data: {
			kind: performances[userId].kind,
			data: performances[userId].data
		}
	})
}
