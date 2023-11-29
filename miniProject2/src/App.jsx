import './App.css'
import MyAppBar from './components/AppBar'
import Footer from './components/Footer'
import ProductDisplay from './components/ProductDisplay'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <>

    <MyAppBar/>
    
    {/* <AppRoutes/> */}

    <ProductDisplay/>

    <Footer/>

    </>
  )
}

export default App
