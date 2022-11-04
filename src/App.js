import 'assets/css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import PageErrorMessage from 'parts/PageErrorMessage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/congratulation" element={<Congratulation />} />
      <Route path="*" element={<PageErrorMessage />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
