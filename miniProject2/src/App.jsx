import "./App.css";
import MyAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/userContext";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <MyAppBar />

          <AppRoutes />

          <Footer />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
