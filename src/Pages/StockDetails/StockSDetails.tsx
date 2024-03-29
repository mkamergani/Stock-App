import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'
import StockGraph from './StockGraph'

function StockDetails() {
  const { state } = useLocation()
  return (
    <div className=" flex w-full flex-col gap-y-4 p-8">
      <div className="flex  gap-x-5">
        <button type="button">
          <Link to="/">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid ">
              <ArrowLeft2 size={20} />
            </div>
          </Link>
        </button>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold"> {state.displaySymbol || 'DJIA'} </p>
          <p className="text-sm font-medium">
            {state.description || 'Dow Jones Industry'}{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold"> {state.stock.c || '$25,585.69'}</p>
        <p
          className={`text-lg font-semibold ${
            state.stock.dp > 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          $ {state.stock.d || '0.69'} {`(${state.stock.dp || '0.38'})%`}{' '}
        </p>
      </div>

      <StockGraph symbol={state.symbol} />
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-[400px] justify-between">
          <p className="text-base font-medium"> Close Price</p>
          <p className="text-base font-bold">
            {state.stock.h || '$25,585.69'}{' '}
          </p>
        </div>
        <div className="flex w-[400px] justify-between ">
          <p className="text-base font-medium"> Last Trade Price</p>
          <p className="text-base font-bold">
            {state.stock.pc || '$25,32.69'}{' '}
          </p>
        </div>
        <div className="flex w-[400px] justify-between ">
          <p className="text-base font-medium"> Outstanding</p>
          <p className="text-base font-bold">25,585.69 </p>
        </div>
        <div className="flex w-[400px] justify-between">
          <p className="text-base font-medium"> Market Value</p>
          <p className="text-base font-bold">25,585.69 </p>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          className=" h-12 w-[400px] rounded-xl bg-black text-center text-base font-semibold text-white"
        >
          Add to Portfolio
        </button>
      </div>
    </div>
  )
}

export default StockDetails
