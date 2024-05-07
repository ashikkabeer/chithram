import Navbar from './components/navbar'
import './App.css'
import Header from './header'
import HorizontalList from './components/horizontal-list'
function App() {

  return (
    <>
     <div className='pt-2'>
      <Navbar/>
      <Header/>
      <HorizontalList/>
     </div>
    </>
  )
}

export default App
