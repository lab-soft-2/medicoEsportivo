import { useState } from 'react';

export default function Laudo() {
  const [doctorName, setDoctorName] = useState('');
  const [doctorCRM, setDoctorCRM] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientDocument, setPatientDocument] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário para onde for necessário
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Gerar Laudo
      </h2>
      <div className="mb-8">
        <label htmlFor="doctorName" className="block text-sm font-medium leading-6 text-gray-900">
          Nome do Médico
        </label>
        <input
          id="doctorName"
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="doctorCRM" className="block text-sm font-medium leading-6 text-gray-900">
          CRM do Médico
        </label>
        <input
          id="doctorCRM"
          type="text"
          value={doctorCRM}
          onChange={(e) => setDoctorCRM(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="patientName" className="block text-sm font-medium leading-6 text-gray-900">
          Nome do Paciente
        </label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="patientDocument" className="block text-sm font-medium leading-6 text-gray-900">
          Documento do Paciente
        </label>
        <input
          id="patientDocument"
          type="text"
          value={patientDocument}
          onChange={(e) => setPatientDocument(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="patientDOB" className="block text-sm font-medium leading-6 text-gray-900">
          Data de Nascimento do Paciente
        </label>
        <input
          id="patientDOB"
          type="date"
          value={patientDOB}
          onChange={(e) => setPatientDOB(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="diagnosis" className="block text-sm font-medium leading-6 text-gray-900">
          Laudo
        </label>
        <textarea
          id="diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          rows={4}
        ></textarea>
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
