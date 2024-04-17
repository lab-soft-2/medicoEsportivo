import React, { useState } from 'react';
import Api from '../../services/api';
import { URL_PATHS } from '../../services/pathUrl';
import Navbar from '../../components/navBar'

interface PacienteEditado {
  medico: string;
  paciente: string;
  newcondition: Record<string, any>;
  consulta: string;
}

const Laudo: React.FC = () => {
  const [emailMedico, setEmailMedico] = useState('');
  const [emailPaciente, setEmailPaciente] = useState('');
  const [novaCondicao, setNovaCondicao] = useState<string>("");
  const [idConsulta, setIdConsulta] = useState('');
  const [pacienteEditado, setPacienteEditado] = useState<PacienteEditado | null>(null);
  const [erroEmissao, setErroEmissao] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await Api.post<PacienteEditado>(URL_PATHS.CONDICAO_PACIENTE, {
        medico: emailMedico,
        paciente: emailPaciente,
        newcondition: novaCondicao,
        consulta: idConsulta
      });

      if (response.status === 200) {
        // Define os dados do paciente editado para mostrar na tela
        setPacienteEditado(response.data);
        setErroEmissao(null);
      } else {
        // Define uma mensagem de erro para mostrar falha na emissão
        setErroEmissao('Ocorreu um erro ao emitir o laudo. Por favor, tente novamente.');
        setPacienteEditado(null);
      }
    } catch (error) {
      // Define uma mensagem de erro para mostrar falha na emissão
      setErroEmissao('Ocorreu um erro ao emitir o laudo. Por favor, tente novamente.');
      setPacienteEditado(null);
    }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Condição Paciente
      </h2>
      <div className="mb-8">
        <label htmlFor="emailMedico" className="block text-sm font-medium leading-6 text-gray-900">
          Email Médico
        </label>
        <input
          id="emailMedico"
          type="text"
          value={emailMedico}
          onChange={(e) => setEmailMedico(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="emailPaciente" className="block text-sm font-medium leading-6 text-gray-900">
          Email Paciente
        </label>
        <input
          id="emailPaciente"
          type="text"
          value={emailPaciente}
          onChange={(e) => setEmailPaciente(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
      <label htmlFor="documento" className="block text-sm font-medium leading-6 text-gray-900">
          Nova Condição
        </label>
        <textarea
          id="documento"
          value={novaCondicao}
          onChange={(e) => setNovaCondicao(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 h-32"
          required
        />
      </div>
      <div className="mb-8">
        <label htmlFor="idConsulta" className="block text-sm font-medium leading-6 text-gray-900">
          ID Consulta
        </label>
        <input
          id="idConsulta"
          type="text"
          value={idConsulta}
          onChange={(e) => setIdConsulta(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Emitir
        </button>
      </div>

      {/* Mostrar dados do paciente editado */}
      {erroEmissao && (
          <div className="text-red-600 mt-4 text-center">{erroEmissao}</div>
        )}
        {pacienteEditado && (
          <div className="mt-4">
            <div className="text-green-600 mt-4 text-center">
              Nova situação do paciente inserida com sucesso!
            </div>
            <pre>{JSON.stringify(pacienteEditado, null, 2)}</pre>
          </div>
        )}
    </form>
    </>
  );
};

export default Laudo;