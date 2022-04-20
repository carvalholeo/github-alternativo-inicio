import {createContext, useState} from 'react';

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [modoEscuro, setModoEscuro] = useState('bg-white text-dark');

  function mudarModoEscuro() {
    if (modoEscuro === 'bg-white text-dark') {
      setModoEscuro('bg-dark text-light');
      return;
    }

    setModoEscuro('bg-white text-dark');
  }

  return (
    <DarkModeContext.Provider value={{ modoEscuro, mudarModoEscuro }}>
      {children}
    </DarkModeContext.Provider>
  )
}


export default DarkModeProvider;
