import CustomRoutes from "./components/CustomRoutes";
// import { CartProvider } from "./components/context/CartContext";

function App() {

  return (
    <>
      {/* <CartProvider> */}
        <div className="content">
          <CustomRoutes />
        </div>
      {/* </CartProvider> */}
    </>
  )
}

export default App
