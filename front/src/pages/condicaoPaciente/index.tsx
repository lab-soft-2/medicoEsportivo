import { useState } from 'react';

export default function Laudo() {
  const [emailMedico, setEmailMedico] = useState('');
  const [emailPaciente, setEmailPaciente] = useState('');
  const [novaCondicao, setNovaCondicao] = useState('');
  const [idConsulta, setIdConsulta] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário para onde for necessário
  };

  return (
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
        <label htmlFor="novaCondicao" className="block text-sm font-medium leading-6 text-gray-900">
          Nova Condição
        </label>
        <input
          id="novaCondicao"
          type="text"
          value={novaCondicao}
          onChange={(e) => setNovaCondicao(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
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
    </form>
  );
}
