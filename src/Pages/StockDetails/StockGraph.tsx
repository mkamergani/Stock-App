import { useEffect, useState } from 'react'
import { LineChart, Line } from 'recharts'
import chartConfig from '../../utils/config'
import { HistoricalData } from '../../models/HistoricalDataModel'
import { fetchHistoricalData } from '../../services/stockAPI'
import { getDateRange, formatData } from '../../helpers/chartHelper'
import chartMockData from '../../utils/mockData'

interface Props {
  symbol: string
}

function StockGraph({ symbol }: Props) {
  const [chartData, setChartData] = useState<any>()
  const [filter, setFilter] = useState('1Y')

  useEffect(() => {
    const getChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange(filter)
        const { resolution } = chartConfig[filter]
        const result: HistoricalData = await fetchHistoricalData(
          symbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        )
        setChartData(formatData(result))
      } catch (error) {
        setChartData([])
      }
    }

    getChartData()
  }, [symbol, filter])

  const handleClick = (f: string) => {
    return () => setFilter(f)
  }
  return (
    <div className="mb-10 flex h-[300px] flex-col items-center justify-between">
      <div>
        <LineChart
          width={600}
          height={300}
          data={chartData && chartData.length > 0 ? chartData : chartMockData}
        >
          <Line type="monotone" dataKey="value" stroke="black" dot={false} />
        </LineChart>
      </div>
      <div className="flex w-[500px] justify-between">
        <button type="button" onClick={handleClick('1D')}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              filter === '1D' ? 'bg-black text-white' : ''
            } hover:bg-gray-200`}
          >
            <p className="text-xs font-bold"> 1D </p>
          </div>
        </button>
        <button type="button" onClick={handleClick('1W')}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              filter === '1W' ? 'bg-black text-white' : ''
            } hover:bg-gray-200`}
          >
            <p className="text-xs font-bold"> 7D </p>
          </div>
        </button>
        <button type="button" onClick={handleClick('1M')}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              filter === '1M' ? 'bg-black text-white' : ''
            } hover:bg-gray-200`}
          >
            <p className="text-xs font-bold"> 1M </p>
          </div>
        </button>
        <button type="button" onClick={handleClick('3M')}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              filter === '3M' ? 'bg-black text-white' : ''
            } hover:bg-gray-200`}
          >
            <p className="text-xs font-bold "> 3M </p>
          </div>
        </button>
        <button type="button" onClick={handleClick('1Y')}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              filter === '1Y' ? 'bg-black text-white' : ''
            } hover:bg-gray-200`}
          >
            <p className="text-xs font-bold "> 1Y </p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default StockGraph
