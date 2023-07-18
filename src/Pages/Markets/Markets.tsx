import { useState, useEffect } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchNormal } from 'iconsax-react'
import StockItem from './StockItem'
import { Stock } from '../../models/StockModel'
import { searchStocks } from '../../services/stockAPI'

function Markets() {
  const [input, setInput] = useState('')
  const [bestMatches, setBestMatches] = useState<Stock[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [stocks, setStocks] = useState<Stock[]>([])

  const handleCategory = (category: string) => {
    if (category === 'Main') {
      setStocks(bestMatches)
      return
    }
    const filteredStocks = bestMatches.filter((c) => c.type === category)
    setStocks(filteredStocks)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Stock[] = await searchStocks(input)

        const newCategories = data.map((item) => item.type)
        setCategories(
          Array.from(new Set(['Main', ...categories, ...newCategories]))
        )
        setBestMatches(data)
        setStocks(data)
      } catch (error) {
        setBestMatches([])
        setStocks([])
      }
    }
    fetchData()
  }, [input])
  return (
    <>
      <div className="flex w-full flex-col gap-y-6 rounded-t-3xl bg-blue-600 p-8">
        <p className="mt-10 text-3xl font-bold text-white"> Markets </p>
        <InputGroup className="max-w-lg bg-blue-500">
          <InputLeftElement>
            <SearchNormal size={15} color="white" variant="Outline" />
          </InputLeftElement>
          <Input
            className="text-white"
            placeholder="Search Stocks .."
            _placeholder={{ color: 'inherit' }}
            onChange={(event) => setInput(event.target.value)}
          />
        </InputGroup>
        <div className="flex items-center gap-x-6  overflow-auto pb-4">
          {categories.map((c) => (
            <div onClick={() => handleCategory(c)}>
              <p
                key={c}
                className="cursor-pointer whitespace-nowrap font-medium text-gray-300 hover:text-white"
              >
                {c}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-[450px] w-full flex-col overflow-auto px-8">
        {stocks.map((stock) => (
          <StockItem
            key={stock.symbol}
            displaySymbol={stock.displaySymbol}
            description={stock.description}
            symbol={stock.symbol}
          />
        ))}
      </div>
    </>
  )
}

export default Markets
