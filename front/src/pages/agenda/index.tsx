import React from 'react';

const appointments = [
  {
    nomePaciente: 'John Doe',
    documentoPaciente: "123.123.123.23",
    dataAgendamento: '22/03/2024',
  },
  {
    nomePaciente: 'John Doe',
    documentoPaciente: "123.123.123.23",
    dataAgendamento: '22/03/2024',
  },
  {
    nomePaciente: 'John Doe',
    documentoPaciente: "123.123.123.23",
    dataAgendamento: '22/03/2024',
  },
  // Adicione mais compromissos conforme necessário
];

export default function Agenda() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Agenda</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {appointments.map((appointment, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{appointment.nomePaciente}</p>
                <p className="mt-1 text-sm text-gray-500">{appointment.documentoPaciente}</p>
                <p className="mt-1 text-sm text-gray-500">{appointment.dataAgendamento}</p>
              </div>
              <div className="flex-shrink-0">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Editar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
