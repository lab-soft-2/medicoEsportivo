import React, { useState } from 'react';
import Api from '../../services/api';
import { URL_PATHS } from '../../services/pathUrl';

import Navbar from '../../components/navBar';

const Exames: React.FC = () => {
  const [emailMedico, setEmailMedico] = useState('');
  const [emailPaciente, setEmailPaciente] = useState('');
  const [exame, setExame] = useState<any | null>(null);
  const [erroVisualizacao, setErroVisualizacao] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await Api.get(URL_PATHS.VISUALIZAR_EXAMES, {
        params: {
          emailMedico,
          emailPaciente
        }
      });

      setExame(response.data);
      setErroVisualizacao(null);
    } catch (error) {
      setExame(null);
      setErroVisualizacao('Ocorreu um erro ao buscar os exames. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="pb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Exames</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <input
              type="email"
              className="border-gray-300 border rounded-md p-2 mr-2"
              placeholder="Email Médico"
              value={emailMedico}
              onChange={(e) => setEmailMedico(e.target.value)}
            />
            <input
              type="email"
              className="border-gray-300 border rounded-md p-2 mr-2"
              placeholder="Email Paciente"
              value={emailPaciente}
              onChange={(e) => setEmailPaciente(e.target.value)}
            />
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Visualizar
            </button>
          </div>
        </form>
        {erroVisualizacao && (
          <div className="text-red-600 mt-4 text-center">{erroVisualizacao}</div>
        )}
        {exame && (
          <div className="mt-4">
            <div className="text-green-600 mt-4 text-center">
              Lista de exames:
            </div>
            <pre>{JSON.stringify(exame, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Exames;
