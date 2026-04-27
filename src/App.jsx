import { useState } from 'react'

import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import SelectedPage from './components/SelectedPage'

function App() {
  const [currentPage, setCurrentPage] = useState(false)

  return (
    <>
      <Header updateFunction={ setCurrentPage } category={currentPage?.category}/>
      <>
        {!currentPage 
          ? (<HomePage updateFunction={setCurrentPage} />) 
          : (<SelectedPage article={currentPage} updateFunction={setCurrentPage} />)
        }
      </>
      <Footer />
    </>
  )
}

export default App
