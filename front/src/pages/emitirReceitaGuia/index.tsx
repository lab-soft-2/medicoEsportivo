import { useState } from 'react';

export default function EmitirReceitaGuia() {
  const [patientName, setPatientName] = useState('');
  const [patientDocument, setPatientDocument] = useState('');
  const [medicine, setMedicine] = useState('');
  const [quantity, setQuantity] = useState('');
  const [use, setUse] = useState('');
  const [guide, setGuide] = useState('');

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
        <label htmlFor="medicine" className="block text-sm font-medium leading-6 text-gray-900">
          Medicamento
        </label>
        <input
          id="medicine"
          type="text"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
          Quantidade
        </label>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="use" className="block text-sm font-medium leading-6 text-gray-900">
          Uso
        </label>
        <input
          id="use"
          type="text"
          value={use}
          onChange={(e) => setUse(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="guide" className="block text-sm font-medium leading-6 text-gray-900">
          Guia
        </label>
        <input
          id="guide"
          type="text"
          value={guide}
          onChange={(e) => setGuide(e.target.value)}
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