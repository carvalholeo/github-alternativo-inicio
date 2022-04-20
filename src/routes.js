import { Routes, Route } from 'react-router-dom';

import Error404 from './pages/Errors/Error404';
import Disabled from './pages/Errors/Disabled';

import Perfil from './pages/Perfil';
import PesquisaUsuario from './pages/PesquisaUsuario';

function Router() {
  return (
    <div className="container-lg">
      <Routes>
        <Route path='/perfil' element={ <Perfil />} />
        
        <Route path='/pesquisa' element={ <PesquisaUsuario /> }/>

        <Route path='/contact' element={<Disabled />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Router;
