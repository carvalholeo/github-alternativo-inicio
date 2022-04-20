import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { DarkModeContext } from './contexts/DarkModeContext';

import Navbar from './components/Navbar';

import Router from './routes';

function App() {
  const [classeModoEscuro, setClasseModoEscuro] = useState('');
  const {modoEscuro} = useContext(DarkModeContext);

  useEffect(() => {
    setClasseModoEscuro(modoEscuro)
  }, [modoEscuro])

  return (
    <div className={classeModoEscuro}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
