import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Success from "./pages/Success";
import { useSelector } from "react-redux";


function App() {
  const user=useSelector(state=>state.user.currentUser)
  
  return (
  <BrowserRouter>
  <Routes> 
    <Route path="/" element={user?<Home/> : <Navigate to="/login"/>}/>
    <Route path="/product" element={<Product/>}>
      <Route path=":id" element={<Product/>}/>
    </Route>
    <Route path="/productlist" element={<ProductList/>}>
      <Route path=":category" element={<ProductList/>}/>
    </Route>
    
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/register" element={ user? <Navigate to="/"/>:<Register/>}/>
    <Route path="/login"  element={ user? <Navigate to="/"/> :<Login/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
