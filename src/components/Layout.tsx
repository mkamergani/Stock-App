import { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}
function Layout({ children }: Props) {
  return (
    <div className="flex justify-center p-8">
      <div className="flex min-h-[600px] w-full max-w-[800px] flex-col items-center justify-between rounded-3xl bg-white">
        {children}
        <Navbar />
      </div>
    </div>
  )
}

export default Layout
