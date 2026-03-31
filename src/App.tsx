import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ProductsPage from './pages/products/ProductsPage';
import HomePage from './pages/home/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
