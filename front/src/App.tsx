import React, {useEffect, useState} from 'react';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Cadastro from './pages/cadastro/index'
import EmitirReceitaGuia from './pages/emitirReceitaGuia';
import Laudo from './pages/condicaoPaciente';
import Agenda from './pages/agenda';
import Exame from './pages/exames';
import Home from './pages/home';

import Navbar from './components/navBar';

import { auth } from './firebase-config'
import { signInWithCustomToken } from 'firebase/auth'


function App() {
    const [user, setUser] = useState<any | null >(null);

    const urlParams = new URLSearchParams(window.location.search);
    const customToken = urlParams.get('token') ?? ''


    useEffect(() => {
        signInWithCustomToken(auth, customToken).then((user) => {
            if (user) {
                console.log("Usuário logado:", user);
                setUser(user);
            } else {
                console.log('empty')
            }
        })
    }, []);

    if (!user) {
        return <div>Carregando...</div>;
    }

      return (
        <>
          <Routes />
        </>
      );
}

export default App;
