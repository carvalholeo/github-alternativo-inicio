import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Error404 from './pages/Errors/Error404';
// import Disabled from './pages/Errors/Disabled';

// import Perfil from './pages/Perfil';
// import PesquisaUsuario from './pages/PesquisaUsuario';

const Error404 = lazy(() => import('./pages/Errors/Error404'));
const Disabled = lazy(() => import('./pages/Errors/Disabled'))
const Perfil = lazy(() => import('./pages/Perfil'))
const PesquisaUsuario = lazy(() => import('./pages/PesquisaUsuario'));

function Router() {
  return (
    <div className="container-lg">
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/perfil/:usuario' element={<Perfil />} />

          <Route path='/pesquisa' element={<PesquisaUsuario />} />

          <Route path='/contact' element={<Disabled />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Router;
