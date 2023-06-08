import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/context/CartContext.jsx';
import { NavigationProvider } from "./components/context/NavigationContext";
import { ThemeProvider } from './components/context/ThemeContext.jsx';
import { HashRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8gjXhfLzgpDG2k8jyCfhFAyrFaVanxS4",
  authDomain: "shopping-cart-f0f5f.firebaseapp.com",
  projectId: "shopping-cart-f0f5f",
  storageBucket: "shopping-cart-f0f5f.appspot.com",
  messagingSenderId: "710844881633",
  appId: "1:710844881633:web:205fd5c3be9150a342f5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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
