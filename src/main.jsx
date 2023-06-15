import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/context/CartContext.jsx';
import { NavigationProvider } from "./components/context/NavigationContext";
import { ThemeProvider } from './components/context/ThemeContext.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationProvider>
      <CartProvider>
        <ThemeProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </CartProvider>
    </NavigationProvider>
  </React.StrictMode>,
)
