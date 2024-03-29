import React from 'react';

import Cadastro from './pages/cadastro/index'

import NavNova from './components/navNova/'
import EmitirReceitaGuia from './pages/emitirReceitaGuia';
import Laudo from './pages/condicaoPaciente';

import Agenda from './pages/agenda';
import Exame from './pages/exames';

function App() {
  return (
    <>
    <Cadastro />
    <EmitirReceitaGuia />
    <Laudo />
    <Agenda />
    <Exame />
    </>
  );
}

export default App;
