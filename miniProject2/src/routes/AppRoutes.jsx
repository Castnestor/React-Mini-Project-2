import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";

function AppRoutes (props) {
    return (
        <Routes>

            <Route index element={<Home {...props}/>}/>
            
            <Route path="/login" element={<Login {...props}/>}/>

            <Route path="/register" element={<Register {...props}/>}/>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;