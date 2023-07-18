import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LineChart, Line } from 'recharts'
import { fetchStockDetails, fetchHistoricalData } from '../../services/stockAPI'
import { StockInfo } from '../../models/StockInfoModel'
import chartConfig from '../../utils/config'
import { HistoricalData } from '../../models/HistoricalDataModel'
import { getDateRange, formatData } from '../../helpers/chartHelper'
import chartMockData from '../../utils/mockData'

interface Props {
  description: string
  displaySymbol: string
  symbol: string
}
function StockItem({ symbol, description, displaySymbol }: Props) {
  const navigate = useNavigate()
  const [currentPrice, setCurrentPrice] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [stock, setStock] = useState({})
  const [chartData, setChartData] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: StockInfo = await fetchStockDetails(symbol)
        setCurrentPrice(data.c)
        setPercentage(data.dp)
        setStock(data)
      } catch (error) {
        setCurrentPrice(0)
        setPercentage(0)
        setStock({})
      }
    }
    fetchData()
  }, [symbol])

  useEffect(() => {
    const getChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange('1Y')
        const { resolution } = chartConfig['1Y']
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
  }, [symbol])
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between py-6"
      onClick={() =>
        navigate('/stock-details', {
          state: {
            description,
            displaySymbol,
            symbol,
            stock,
          },
        })
      }
    >
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold"> {displaySymbol}</p>
        <p className="text-sm font-medium">{description} </p>
      </div>
      <div>
        <LineChart
          width={200}
          height={50}
          data={chartData && chartData.length > 0 ? chartData : chartMockData}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke={percentage > 0 ? '#07A287' : '#F06767'}
            dot={false}
          />
        </LineChart>
      </div>
      <div className="flex w-[120px] flex-col gap-1">
        <p className="text-base font-bold">
          ${!!currentPrice ? currentPrice : '6.648.00'}
        </p>
        <p
          className={`text-sm font-semibold ${
            percentage > 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {!!percentage ? percentage : '-4.22'}%
        </p>
      </div>
    </div>
  )
}

export default StockItem
