import { Stock, StockSearch } from '../models/StockModel'
import { StockInfo } from '../models/StockInfoModel'
import { HistoricalData } from '../models/HistoricalDataModel'
import axiosClient from '../utils/client'

const token = import.meta.env.VITE_API_KEY as string

export const searchStocks = async (query: string): Promise<Stock[]> => {
  const url = `/search?q=${query}&token=${token}`
  try {
    const data: StockSearch = (await (
      await axiosClient.get(url)
    ).data) as unknown as StockSearch

    if (data.count > 10) {
      return data.result.slice(0, 10)
    }
    return data.result
  } catch (err) {
    const message = 'An error has occurred:'
    throw new Error(message)
  }
}

export const fetchStockDetails = async (symbol: string): Promise<StockInfo> => {
  const url = `/quote?symbol=${symbol}&token=${token}`
  try {
    const data: StockInfo = (await (
      await axiosClient.get(url)
    ).data) as unknown as StockInfo
    return data
  } catch (err) {
    const message = 'An error has occurred:'
    throw new Error(message)
  }
}

export const fetchHistoricalData = async (
  symbol: string,
  resolution: string,
  from: number,
  to: number
) => {
  const url = `/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`
  try {
    const data: HistoricalData = (await (
      await axiosClient.get(url)
    ).data) as unknown as HistoricalData
    return data
  } catch (err) {
    const message = 'An error has occurred:'
    throw new Error(message)
  }
}
