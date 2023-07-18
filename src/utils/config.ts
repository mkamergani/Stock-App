type Config = {
  [key: string]: {
    resolution: string
    days: number
    weeks: number
    months: number
    years: number
  }
}

const chartConfig: Config = {
  '1D': { resolution: '1', days: 1, weeks: 0, months: 0, years: 0 },
  '1W': { resolution: '15', days: 0, weeks: 1, months: 0, years: 0 },
  '1M': { resolution: '60', days: 0, weeks: 0, months: 1, years: 0 },
  '3M': { resolution: '60', days: 0, weeks: 0, months: 3, years: 0 },
  '1Y': { resolution: 'D', days: 0, weeks: 0, months: 0, years: 1 },
}

export default chartConfig
