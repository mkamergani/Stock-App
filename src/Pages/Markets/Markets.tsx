import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchNormal } from 'iconsax-react'
import StockItem from './StockItem'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function Markets() {
  return (
    <>
      <div className="flex w-full flex-col gap-y-6 rounded-t-3xl bg-blue-600 p-8">
        <p className="mt-10 text-3xl font-bold text-white"> Markets </p>
        <InputGroup className="max-w-lg bg-blue-500">
          <InputLeftElement>
            <SearchNormal size={15} color="white" variant="Outline" />
          </InputLeftElement>
          <Input className="text-white" />
        </InputGroup>
        <div className="flex items-center gap-x-6  overflow-auto pb-4">
          {items.map((i) => (
            <p key={i} className="whitespace-nowrap font-medium text-gray-300">
              Main Market
            </p>
          ))}
        </div>
      </div>
      <div className="flex max-h-[450px] w-full flex-col overflow-auto px-8">
        {items.map((i) => (
          <StockItem key={i} />
        ))}
      </div>
    </>
  )
}

export default Markets
