import {Link} from 'react-router-dom';

function Error404() {
  return (
    <div>
      <h1>ERRO 404</h1>
      <p>Parece que você entrou em Nowhere, ou "Lugar Nenhum", já que a página acessada não existe.</p>
      <p>Por gentileza, volte para a <Link to="/">página inicial</Link> ou escolha um dos itens do menu.</p>
    </div>
  );
}

export default Error404;
