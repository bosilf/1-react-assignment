import { useState } from 'react'

import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import SelectedPage from './components/SelectedPage'

function App() {
  const [currentPage, setPageStatus] = useState(false)

  return (
    <>
      <Header updateFunction={ setPageStatus } category={currentPage?.category}/>
      <>
        {!currentPage 
          ? (<HomePage updateFunction={setPageStatus} />) 
          : (<SelectedPage article={currentPage} updateFunction={setPageStatus} />)
        }
      </>
      <Footer />
    </>
  )
}

export default App
