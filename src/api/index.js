import axios from 'axios'
import mockData from '../data/mockData'

export const apiClient = (useMock = false) => {
	if (useMock) {
		return {
			get: async (url) => {
				switch (url) {
					case '/user/12':
						return { data: mockData.user }
					case '/user/12/activity':
						return { data: mockData.activity }
					case '/user/12/average-sessions':
						return { data: mockData.averageSessions }
					case '/user/12/performance':
						return { data: mockData.performance }
					default:
						return { data: null }
				}
			}
		}
	}

	return axios.create({
		baseURL: 'http://localhost:3001'
	})
}
