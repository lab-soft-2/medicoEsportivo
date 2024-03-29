import React, { useState } from 'react';
import Api from '../../services/api';
import { URL_PATHS } from '../../services/pathUrl';

const EmitirReceitaGuia: React.FC = () => {
  const [emailMedico, setEmailMedico] = useState('');
  const [emailPaciente, setEmailPaciente] = useState('');
  const [documento, setDocumento] = useState('');
  const [resultadoEmissao, setResultadoEmissao] = useState<string | null>(null);
  const [erroEmissao, setErroEmissao] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await Api.post(URL_PATHS.EMITIR_RECEITA_GUIA, {
        "email profissional": emailMedico,
        "email paciente": emailPaciente,
        documento: JSON.parse(documento)
      });

      // Define o resultado da emissão para mostrar sucesso
      setResultadoEmissao('Receita ou guia emitida com sucesso!');
      setErroEmissao(null);
    } catch (error) {
      // Define uma mensagem de erro para mostrar falha na emissão
      setErroEmissao('Ocorreu um erro ao emitir a receita ou guia. Por favor, tente novamente.');
      setResultadoEmissao(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Emitir Receita & Guia
      </h2>
      <div className="mb-8">
        <label htmlFor="emailMedico" className="block text-sm font-medium leading-6 text-gray-900">
          Email Médico
        </label>
        <input
          id="emailMedico"
          type="email"
          value={emailMedico}
          onChange={(e) => setEmailMedico(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-8">
        <label htmlFor="emailPaciente" className="block text-sm font-medium leading-6 text-gray-900">
          Email Paciente
        </label>
        <input
          id="emailPaciente"
          type="email"
          value={emailPaciente}
          onChange={(e) => setEmailPaciente(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-8">
        <label htmlFor="documento" className="block text-sm font-medium leading-6 text-gray-900">
          Documento
        </label>
        <textarea
          id="documento"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 h-32"
          required
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Emitir
        </button>
      </div>
      {/* Mostrar mensagem de sucesso ou erro */}
      {resultadoEmissao && (
        <div className="text-green-600 mt-4 text-center">
          {resultadoEmissao}
        </div>
      )}
      {erroEmissao && (
        <div className="text-red-600 mt-4 text-center">
          {erroEmissao}
        </div>
      )}
    </form>
  );
};

export default EmitirReceitaGuia;
