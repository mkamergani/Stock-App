/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom'

function StockItem() {
  const navigate = useNavigate()
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between py-6"
      onClick={() => navigate('/stock-details')}
    >
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold"> DJIA</p>
        <p className="text-sm font-medium">Dow Jones Industry </p>
      </div>
      <div></div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold"> $25.585.69</p>
        <p className="text-sm font-semibold text-green-600">-0.38% </p>
      </div>
    </div>
  )
}

export default StockItem
