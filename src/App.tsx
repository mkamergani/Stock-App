import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout'
import Markets from './Pages/Markets'
import StockDetails from './Pages/StockDetails'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Markets />} />
        <Route path="/stock-details" element={<StockDetails />} />
      </Routes>
    </Layout>
  )
}

function WrappedApp() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  )
}
export default WrappedApp
