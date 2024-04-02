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
    <BrowserRouter basename={"/medico"}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Cadastro />} />
                <Route path="/emitir/documento" element={<EmitirReceitaGuia />} />
                <Route path="/vizualizar/agenda" element={<Agenda />} />
                <Route path="/vizualizar/exame" element={<Exame />} />
                <Route path="/finalizar/consulta" element={<Laudo />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;