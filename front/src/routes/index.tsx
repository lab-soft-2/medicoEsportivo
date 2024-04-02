import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cadastro from '../pages/cadastro/index'
import EmitirReceitaGuia from '../pages/emitirReceitaGuia';
import Laudo from '../pages/condicaoPaciente';
import Agenda from '../pages/agenda';
import Exame from '../pages/exames';
import Home from '../pages/home';
import PageNotFound from '../pages/notFound'

const Rotas: React.FC = () => {
    return(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/medico/home" element={<Home />} />
                <Route path="/medico/signup" element={<Cadastro />} />
                <Route path="/medico/emitir/documento" element={<EmitirReceitaGuia />} />
                <Route path="/medico/vizualizar/agenda" element={<Agenda />} />
                <Route path="/medico/vizualizar/exame" element={<Exame />} />
                <Route path="/medico/finalizar/consulta" element={<Laudo />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;