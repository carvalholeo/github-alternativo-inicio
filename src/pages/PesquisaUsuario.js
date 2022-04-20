import { useState, useEffect } from 'react';

import clientGithub from '../services/clientGithub';

function UserSearch() {
  const [pesquisa, setPesquisa] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

  useEffect(() => {
    setShowLoading(false)
  }, [resultadoPesquisa])

  function limpaFormulario() {
    setPesquisa('');
  }

  function trabalhaComSubmit(evento) {
    evento.preventDefault();
    setShowLoading(true);

    clientGithub.get(`/search/users?q=${pesquisa}`)
      .then(resposta => setResultadoPesquisa(resposta.data.items))
      .catch(() => {
        alert('Erro ao pesquisar usuários')
        setResultadoPesquisa([]);
      });
  }

  return (
    <main>
      <h1>Pesquisa de usuário</h1>
      <small>Procure usuários, usando a pesquisa nativa do GitHub.</small>

      <form className="mb-3 pb-3" onReset={limpaFormulario} onSubmit={trabalhaComSubmit}>
        <fieldset className="mb-3">
          <label htmlFor="user" className="form-label">Usuário</label>
          <input
            type="text"
            placeholder="Filipe Deschamps"
            className="form-control"
            id="user"
            aria-describedby="ajudaPesquisa"
            value={pesquisa}
            onChange={e => setPesquisa(e.target.value)}
          />
          <p id="ajudaPesquisa" className="form-text">Você pode pesquisar o nome ou o @ do usuário no GitHub. Em seguida, irá aparecer uma lista com essas informações!</p>
        </fieldset>
        <button className="btn btn-success me-2">Pesquisar</button>
        <button type="reset" className="btn btn-danger">Limpar</button>
      </form>
      {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      <div className="row">
        {!showLoading && resultadoPesquisa &&

          resultadoPesquisa.map(usuario => {
            return (
              <section className="card-group col-12 col-lg-3 col-md-4 col-sm-6" key={usuario.id}>
                <article className="card-body">
                  <a href={usuario.html_url}  style={{ maxWidth: "200px" }}>
                    <img src={usuario.avatar_url} alt={'Foto de perfil de ' + usuario.login} className="card-img-top" />
                    <section className="card-body">
                      <h5 className="card-title">{usuario.login}</h5>
                    </section>
                  </a>
                </article>
              </section>
            )
          })
        }
      </div>
    </main>
  )
}

export default UserSearch;
