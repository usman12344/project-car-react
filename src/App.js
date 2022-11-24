import 'assets/css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import Provider from 'helper/hooks/useGlobalContext';
import Notfound from 'pages/NotFound';


function App() {
  return (
    <Provider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products/:idp" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/congratulation" element={<Congratulation />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
