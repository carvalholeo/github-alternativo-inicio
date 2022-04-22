import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { useContext, useState, useEffect, lazy, Suspense } from 'react';

import { DarkModeContext } from './contexts/DarkModeContext';

import Router from './routes';

// import Navbar from './components/Navbar';

const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  const [classeModoEscuro, setClasseModoEscuro] = useState('');
  const { modoEscuro } = useContext(DarkModeContext);

  useEffect(() => {
    setClasseModoEscuro(modoEscuro)
  }, [modoEscuro])

  return (
    <div className={classeModoEscuro}>
      <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}>
          <Navbar />
          <Router />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
