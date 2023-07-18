import chartConfig from '../utils/config'
import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from './dateHelper'
import { HistoricalData } from '../models/HistoricalDataModel'

export function formatData(data: HistoricalData) {
  return data.c.map((item, index) => {
    return {
      value: item.toFixed(2),
      date: convertUnixTimestampToDate(data.t[index]),
    }
  })
}

export function getDateRange(filter: string) {
  const { days, weeks, months, years } = chartConfig[filter]

  const endDate = new Date()
  const startDate = createDate(endDate, -days, -weeks, -months, -years)

  const startTimestampUnix = convertDateToUnixTimestamp(startDate)
  const endTimestampUnix = convertDateToUnixTimestamp(endDate)
  return { startTimestampUnix, endTimestampUnix }
}
