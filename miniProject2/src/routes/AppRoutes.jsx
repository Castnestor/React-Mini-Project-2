import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import CartPage from "../pages/CartPage";
import MyAccount from "../pages/MyAccountPage";
import ProductPage from "../pages/ProductPage"

function AppRoutes (props) {
    return (
        <Routes>

            <Route index element={<Home {...props}/>}/>
            
            <Route path="/login" element={<Login {...props}/>}/>

            <Route path='/cart' element={<CartPage {...props}/>}/>

            <Route path='/account' element={<MyAccount {...props}/>}/>

            <Route path='/product' element={<ProductPage {...props}/>}/>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;