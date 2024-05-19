import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2022', receipt: 20000 },
    { date: '02/01/2022', receipt: 30000 },
    { date: '03/01/2022', receipt: 20000 },
    { date: '04/01/2022', receipt: 30000 },
    { date: '05/01/2022', receipt: 60000 },
    { date: '06/01/2022', receipt: 70000 },
  ])
})
