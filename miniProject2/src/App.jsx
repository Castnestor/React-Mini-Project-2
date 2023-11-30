import "./App.css";
import MyAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import { UserProvider } from "./context/userContext";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <UserProvider>
        <MyAppBar />

        <AppRoutes />

        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
