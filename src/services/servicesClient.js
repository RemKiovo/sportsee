import getActivityMock from './mock/activity.service'
import getAverageSessionMock from './mock/averageSession.service'
import getPerformanceMock from './mock/performance.service'
import getUserMock from './mock/user.service'

import getActivityApi from './api/activity.service'
import getAverageSessionApi from './api/averageSession.service'
import getPerformanceApi from './api/performance.service'
import getUserApi from './api/user.service'

/**
 * useMock
 * @description Checks if the mock data is used
 */
const useMock = import.meta.env.VITE_USE_MOCK === 'true'

const getActivity = useMock ? getActivityMock : getActivityApi
const getAverageSession = useMock ? getAverageSessionMock : getAverageSessionApi
const getPerformance = useMock ? getPerformanceMock : getPerformanceApi
const getUser = useMock ? getUserMock : getUserApi

export { getActivity, getAverageSession, getPerformance, getUser }
