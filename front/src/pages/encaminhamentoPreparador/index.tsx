import { useState } from 'react';

export default function EncaminhamentoPreparadorFisico() {
  const [doctorName, setDoctorName] = useState('');
  const [doctorCRM, setDoctorCRM] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientDocument, setPatientDocument] = useState('');
  const [patientWeight, setPatientWeight] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [physicalRestriction, setPhysicalRestriction] = useState(false);
  const [specificRestriction, setSpecificRestriction] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário para onde for necessário
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Encaminhamento para Preparador Físico
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
        <label htmlFor="patientWeight" className="block text-sm font-medium leading-6 text-gray-900">
          Peso do Paciente
        </label>
        <input
          id="patientWeight"
          type="text"
          value={patientWeight}
          onChange={(e) => setPatientWeight(e.target.value)}
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
        <label className="block text-sm font-medium leading-6 text-gray-900">Restrição Física</label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
              checked={physicalRestriction}
              onChange={(e) => setPhysicalRestriction(e.target.checked)}
            />
            <span className="ml-2">Sim</span>
          </label>
        </div>
      </div>
      {physicalRestriction && (
        <div className="mb-8">
          <label htmlFor="specificRestriction" className="block text-sm font-medium leading-6 text-gray-900">
            Especificar Restrição Física
          </label>
          <textarea
            id="specificRestriction"
            value={specificRestriction}
            onChange={(e) => setSpecificRestriction(e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          ></textarea>
        </div>
      )}
      <div className="mt-8">
        <button
          type="submit"
          className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
