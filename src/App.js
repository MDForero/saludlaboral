import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path='servicios' element={<Servicios/>}/>
          <Route path="nosotros" element={<Nosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
