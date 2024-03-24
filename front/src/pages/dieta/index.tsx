import { useState } from 'react';

export default function Dieta() {
  const [doctorName, setDoctorName] = useState('');
  const [doctorCRM, setDoctorCRM] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientDocument, setPatientDocument] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [patientWeight, setPatientWeight] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [morningSnack, setMorningSnack] = useState('');
  const [lunch, setLunch] = useState('');
  const [afternoonSnack, setAfternoonSnack] = useState('');
  const [dinner, setDinner] = useState('');
  const [supper, setSupper] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implementar a lógica para enviar os dados do formulário
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Gerar Dieta
    </h2>
      <div className="mb-4">
        <label htmlFor="doctorName" className="block text-sm font-medium leading-5 text-gray-700">
          Nome do Médico:
        </label>
        <input
          id="doctorName"
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="doctorCRM" className="block text-sm font-medium leading-5 text-gray-700">
          CRM do Médico:
        </label>
        <input
          id="doctorCRM"
          type="text"
          value={doctorCRM}
          onChange={(e) => setDoctorCRM(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patientName" className="block text-sm font-medium leading-5 text-gray-700">
          Nome do Paciente:
        </label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patientDocument" className="block text-sm font-medium leading-5 text-gray-700">
          Documento do Paciente:
        </label>
        <input
          id="patientDocument"
          type="text"
          value={patientDocument}
          onChange={(e) => setPatientDocument(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patientDOB" className="block text-sm font-medium leading-5 text-gray-700">
          Data de Nascimento do Paciente:
        </label>
        <input
          id="patientDOB"
          type="date"
          value={patientDOB}
          onChange={(e) => setPatientDOB(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patientWeight" className="block text-sm font-medium leading-5 text-gray-700">
          Peso do Paciente:
        </label>
        <input
          id="patientWeight"
          type="number"
          value={patientWeight}
          onChange={(e) => setPatientWeight(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dietPlan" className="block text-sm font-medium leading-5 text-gray-700">
          Plano Alimentar:
        </label>
        <textarea
          id="dietPlan"
          value={dietPlan}
          onChange={(e) => setDietPlan(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="breakfast" className="block text-sm font-medium leading-5 text-gray-700">
          Café da manhã (7h00 - 8h00):
        </label>
        <textarea
          id="breakfast"
          value={breakfast}
          onChange={(e) => setBreakfast(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="morningSnack" className="block text-sm font-medium leading-5 text-gray-700">
          Lanche da manhã (10h00 - 11h00):
        </label>
        <textarea
          id="morningSnack"
          value={morningSnack}
          onChange={(e) => setMorningSnack(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="afternoonSnack" className="block text-sm font-medium leading-5 text-gray-700">
          Lanche da tarde (15h00 - 16h00):
        </label>
        <textarea
          id="afternoonSnack"
          value={afternoonSnack}
          onChange={(e) => setAfternoonSnack(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="dinner" className="block text-sm font-medium leading-5 text-gray-700">
          Jantar (19h00 - 20h00):
        </label>
        <textarea
          id="dinner"
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="supper" className="block text-sm font-medium leading-5 text-gray-700">
          Ceia (22h00 - 23h00):
        </label>
        <textarea
          id="supper"
          value={supper}
          onChange={(e) => setSupper(e.target.value)}
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