import { useState } from 'react';

export default function EmitirReceitaGuia() {
  const [emailMedico, setEmailMedico] = useState('');
  const [emailPaciente, setEmailPaciente] = useState('');
  const [documento, setDocumento] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário para onde for necessário
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Emitir Receita & Guia
      </h2>
      <div className="mb-8">
        <label htmlFor="patientName" className="block text-sm font-medium leading-6 text-gray-900">
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
        <label htmlFor="patientDocument" className="block text-sm font-medium leading-6 text-gray-900">
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
        <label htmlFor="medicine" className="block text-sm font-medium leading-6 text-gray-900">
          Documento
        </label>
        <input
          id="documento"
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
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
    </form>
  );
}