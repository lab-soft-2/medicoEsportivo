import React from 'react';

const appointments = [
  {
    patientName: 'John Doe',
    time: '10:00 AM',
    reason: 'Check-up',
  },
  {
    patientName: 'Jane Smith',
    time: '11:30 AM',
    reason: 'Dental cleaning',
  },
  {
    patientName: 'Alice Johnson',
    time: '02:00 PM',
    reason: 'Consultation',
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
                <p className="text-sm font-semibold text-gray-900 truncate">{appointment.patientName}</p>
                <p className="mt-1 text-sm text-gray-500">{appointment.time}</p>
                <p className="mt-1 text-sm text-gray-500">{appointment.reason}</p>
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
