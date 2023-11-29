import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";

function AppRoutes (props) {
    return (
        <Routes>

            <Route index element={<Login {...props}/>}/>
            
            {/* <Route path="*" element={}/> */}
        </Routes>
    )
}

export default AppRoutes;