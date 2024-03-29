import React, { useState } from 'react';
import Api from '../../services/api';
import { URL_PATHS } from '../../services/pathUrl';

const Exames: React.FC = () => {
  const [emailMedico, setEmailMedico] = useState('');
  const [emailPaciente, setEmailPaciente] = useState('');
  const [exames, setExames] = useState<any[]>([]);
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

      setExames(response.data);
      setErroVisualizacao(null);
    } catch (error) {
      setExames([]);
      setErroVisualizacao('Ocorreu um erro ao buscar os exames. Por favor, tente novamente.');
    }
  };

  return (
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
          <div className="text-red-600 mt-4 text-center">
            {erroVisualizacao}
          </div>
        )}
        <div className="grid grid-cols-1 gap-8">
          {exames.length > 0 ? (
            exames.map((exame, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6">
                  <p className="text-lg font-semibold text-gray-900">Exame {index + 1}</p>
                  <p className="text-sm text-gray-500">Email Médico: {exame.emailMedico}</p>
                  <p className="text-sm text-gray-500">Email Paciente: {exame.emailPaciente}</p>
                  {/* Adicione mais informações dos exames conforme necessário */}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center">Nenhum exame encontrado.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exames;
