import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSwapVertical, Activity, MessageText } from 'iconsax-react'

function Navbar() {
  const [active, setActive] = useState('markets')
  const handleClick = (page: string) => {
    return () => setActive(page)
  }
  return (
    <div className="flex items-center justify-center gap-x-10 pb-6 ">
      <button type="button" onClick={handleClick('portfolio')}>
        <Link to="/">
          <div
            className={` ${
              active === 'portfolio' ? 'text-blue-600' : ''
            } flex h-[100px] w-[100px] flex-col items-center justify-center gap-y-2 rounded-xl p-2 hover:bg-blue-100`}
          >
            <Activity size={40} variant="Outline" />
            <p className="text-base font-semibold">Portfolio</p>
          </div>
        </Link>
      </button>
      <button type="button" onClick={handleClick('markets')}>
        <Link to="/">
          <div
            className={` ${
              active === 'markets' ? 'text-blue-600' : ''
            } flex h-[100px] w-[100px] flex-col items-center justify-center gap-y-2 rounded-xl p-2 hover:bg-blue-100`}
          >
            <ArrowSwapVertical size={40} variant="Outline" />
            <p className="text-base font-semibold">Markets</p>
          </div>
        </Link>
      </button>

      <button type="button" onClick={handleClick('news')}>
        <Link to="/">
          <div
            className={` ${
              active === 'news' ? 'text-blue-600' : ''
            } flex h-[100px] w-[100px] flex-col items-center justify-center gap-y-2 rounded-xl p-2 hover:bg-blue-100`}
          >
            <MessageText size={40} variant="Outline" />
            <p className="text-base font-semibold">News</p>
          </div>
        </Link>
      </button>
    </div>
  )
}

export default Navbar
