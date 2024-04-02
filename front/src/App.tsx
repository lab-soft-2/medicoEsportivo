import React from 'react';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Cadastro from './pages/cadastro/index'
import EmitirReceitaGuia from './pages/emitirReceitaGuia';
import Laudo from './pages/condicaoPaciente';
import Agenda from './pages/agenda';
import Exame from './pages/exames';
import Home from './pages/home';

import Navbar from './components/navBar';

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
