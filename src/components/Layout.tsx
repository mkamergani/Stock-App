import { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}
function Layout({ children }: Props) {
  return (
    <div className="p-20">
      <div className="flex min-h-[600px] flex-col items-center justify-between rounded-3xl bg-white p-8">
        {children}
        <Navbar />
      </div>
    </div>
  )
}

export default Layout
