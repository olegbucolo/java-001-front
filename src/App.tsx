import { Routes, Route} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<DefaultLayout/>}></Route>
      </Routes>
    </>
  )
}

export default App
