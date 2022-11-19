import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './comp/pages/Landing'
import TestView from './comp/pages/TestView'
import Results from './comp/pages/Results'
import SiteNavBar from './comp/components/SiteNavBar'
import Footer from './comp/components/Footer'

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/test" element={<TestView />} />
          <Route path="/result" element={<Results />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
