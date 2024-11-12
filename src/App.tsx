import { Outlet } from 'react-router-dom'
import Header from './compunent/haeder/Header'
import Footer from './compunent/footer/Footer'
import Search from './compunent/search/Search'

function App() {

  return (
    <div
      className='w-full'
    >
      <Header />
      <div
        className='px-5'
      >

        <Search />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
