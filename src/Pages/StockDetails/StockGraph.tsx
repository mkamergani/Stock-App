function StockGraph() {
  return (
    <div className="flex h-[300px] flex-col items-center justify-between py-4">
      <div>graph</div>
      <div className="flex w-[500px] justify-between">
        <button type="button">
          <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200">
            <p className="text-xs font-bold"> 1D </p>
          </div>
        </button>
        <button type="button">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black hover:bg-gray-200">
            <p className="text-xs font-bold text-white"> 7D </p>
          </div>
        </button>
        <button type="button">
          <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200">
            <p className="text-xs font-bold"> 1M </p>
          </div>
        </button>
        <button type="button">
          <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200">
            <p className="text-xs font-bold "> 3M </p>
          </div>
        </button>
        <button type="button">
          <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200">
            <p className="text-xs font-bold "> 1Y </p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default StockGraph
