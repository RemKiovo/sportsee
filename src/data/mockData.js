const users = {
	12: {
		id: 12,
		userInfos: {
			firstName: 'Remi',
			lastName: 'Epaulais',
			age: 24
		},
		todayScore: 0.52,
		keyData: {
			calorieCount: 1000,
			proteinCount: 200,
			carbohydrateCount: 300,
			lipidCount: 80
		}
	},
	18: {
		id: 18,
		userInfos: {
			firstName: 'Martin',
			lastName: 'Dupond',
			age: 34
		},
		score: 0.2,
		keyData: {
			calorieCount: 3000,
			proteinCount: 200,
			carbohydrateCount: 300,
			lipidCount: 200
		}
	}
}

const activity = {
	12: {
		userId: 12,
		sessions: [
			{ day: '2020-07-01', kilogram: 80, calories: 300 },
			{ day: '2020-07-02', kilogram: 90, calories: 250 },
			{ day: '2020-07-03', kilogram: 100, calories: 180 },
			{ day: '2020-07-04', kilogram: 90, calories: 200 },
			{ day: '2020-07-05', kilogram: 80, calories: 250 },
			{ day: '2020-07-06', kilogram: 70, calories: 175 },
			{ day: '2020-07-07', kilogram: 75, calories: 180 }
		]
	},
	18: {
		userId: 18,
		sessions: [
			{ day: '2020-07-01', kilogram: 90, calories: 200 },
			{ day: '2020-07-02', kilogram: 95, calories: 270 },
			{ day: '2020-07-03', kilogram: 85, calories: 180 },
			{ day: '2020-07-04', kilogram: 90, calories: 200 },
			{ day: '2020-07-05', kilogram: 85, calories: 200 },
			{ day: '2020-07-06', kilogram: 80, calories: 200 },
			{ day: '2020-07-07', kilogram: 75, calories: 180 }
		]
	}
}

const averageSessions = {
	12: {
		data: {
			userId: 12,
			sessions: [
				{ day: 1, sessionLength: 30 },
				{ day: 2, sessionLength: 31 },
				{ day: 3, sessionLength: 35 },
				{ day: 4, sessionLength: 30 },
				{ day: 5, sessionLength: 30 },
				{ day: 6, sessionLength: 30 },
				{ day: 7, sessionLength: 30 }
			]
		}
	},
	18: {
		data: {
			userId: 18,
			sessions: [
				{ day: 1, sessionLength: 30 },
				{ day: 2, sessionLength: 30 },
				{ day: 3, sessionLength: 20 },
				{ day: 4, sessionLength: 30 },
				{ day: 5, sessionLength: 30 },
				{ day: 6, sessionLength: 10 },
				{ day: 7, sessionLength: 60 }
			]
		}
	}
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
			{ value: 50, kind: 1 },
			{ value: 200, kind: 2 },
			{ value: 150, kind: 3 },
			{ value: 50, kind: 4 },
			{ value: 190, kind: 5 },
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
			{ value: 50, kind: 1 },
			{ value: 250, kind: 2 },
			{ value: 80, kind: 3 },
			{ value: 30, kind: 4 },
			{ value: 190, kind: 5 },
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
