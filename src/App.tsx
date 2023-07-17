import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
export default WrappedApp
