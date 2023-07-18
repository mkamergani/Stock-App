export interface Stock {
  description: string
  displaySymbol: string
  symbol: string
  type: string
}

export interface StockSearch {
  count: number
  result: Stock[]
}
