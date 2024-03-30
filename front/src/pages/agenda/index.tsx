import React, { useState } from 'react';
import Api from '../../services/api'; // Importe o serviço de API
import { URL_PATHS } from '../../services/pathUrl';

const Agenda: React.FC = () => {
  const [emailMedico, setEmailMedico] = useState('');
  const [consultas, setConsultas] = useState<any[]>([]); // Estado para armazenar as consultas
  const [erroConsulta, setErroConsulta] = useState<string | null>(null); // Estado para armazenar mensagens de erro

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await Api.get(URL_PATHS.VISUALIZAR_AGENDA, {
        params: { email: emailMedico } // Passando o email do médico como parâmetro da requisição
      });
      setConsultas([response.data]); // Define a resposta da API como um único elemento do array de consultas
      setErroConsulta(null); // Limpa mensagens de erro
    } catch (error) {
      setErroConsulta('Erro ao buscar agenda.'); // Define mensagem de erro em caso de falha na requisição
      setConsultas([]); // Limpa consultas em caso de erro
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="pb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Agenda</h1>
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
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Visualizar
            </button>
          </div>
        </form>
        {/* Mostrar mensagem de erro, se houver */}
        {erroConsulta && (
          <div className="text-red-600 mt-4 text-center">
            {erroConsulta}
          </div>
        )}
        {/* Mostrar consultas */}
        <div className="grid grid-cols-1 gap-8">
          {consultas.map((consulta, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6">
                <p className="text-lg font-semibold text-gray-900">Consulta {index + 1}</p>
                <p className="text-sm text-gray-500">Email Médico: {consulta.emailMedico}</p>
                <p className="text-sm text-gray-500">Data: {consulta.data}</p>
                {/* Adicione mais informações das consultas conforme necessário */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
