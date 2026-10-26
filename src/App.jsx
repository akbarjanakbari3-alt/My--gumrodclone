import NotFound from "./pages/Notfound";
import Settings from "./pages/Setttings";
import Profile from "./pages/Profile";
import Downloads from "./pages/Downloads";
import MyOrders from "./pages/Myorder";
import Dashboard from "./pages/Dashborad";
import ForgotPassword from "./pages/Forgotpassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OrderSuccess from "./pages/OrderSuccess";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/productDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;