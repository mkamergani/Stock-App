import { ArrowSwapVertical, Activity, MessageText } from 'iconsax-react'

function Navbar() {
  return (
    <div className="flex items-center justify-center gap-x-10">
      <button type="button">
        <div className=" flex h-[100px] w-[100px] flex-col items-center justify-center gap-y-2 rounded-xl p-2 hover:bg-blue-100">
          <Activity size={40} variant="Outline" />
          <p className="text-base font-semibold">Portfolio</p>
        </div>
      </button>
      <button type="button">
        <div className=" flex h-[100px] w-[100px] flex-col items-center justify-center gap-y-2 rounded-xl p-2 hover:bg-blue-100">
          <ArrowSwapVertical size={40} variant="Outline" />
          <p className="text-base font-semibold">Markets</p>
        </div>
      </button>
      <button type="button">
        <div className=" flex h-[100px] w-[100px] flex-col items-center justify-center gap-y-2 rounded-xl p-2 hover:bg-blue-100">
          <MessageText size={40} variant="Outline" />
          <p className="text-base font-semibold">News</p>
        </div>
      </button>
    </div>
  )
}

export default Navbar
