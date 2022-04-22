import {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';

import clientGithub from '../services/clientGithub';

import { DarkModeContext } from '../contexts/DarkModeContext'

function Perfil() {
  const [dadosPerfil, setDadosPerfil] = useState({});
  const [nomeBotao, setNomeBotao] = useState('Escuro');
  const {mudarModoEscuro} = useContext(DarkModeContext);
  const { usuario = 'carvalholeo' } = useParams();

  useEffect(() => {
    async function buscaPerfil() {
      const resposta = await clientGithub.get(`/users/${usuario}`);
      const objetoFinal = resposta.data;

      setDadosPerfil(objetoFinal);
    }

    buscaPerfil()
  }, [usuario]);

  useEffect(() => {
    console.log(dadosPerfil);
  }, [dadosPerfil]);

  function clicaParaAlterar(evento) {
    evento.preventDefault();

    if (nomeBotao === 'Escuro') {
      setNomeBotao('Claro');
    } else {
      setNomeBotao('Escuro');
    }
    mudarModoEscuro();
  }


  return (
    <>
      <main>
        <button className='d-block' onClick={clicaParaAlterar}>{nomeBotao}</button>
        <img src={dadosPerfil?.avatar_url} alt={"Foto de perfil de " + dadosPerfil?.name} className="d-block" />
        <p>{dadosPerfil?.name} - {dadosPerfil?.followers} seguidores e seguindo {dadosPerfil?.following} pessoas</p>
      </main>
    </>
  )
}

export default Perfil;
