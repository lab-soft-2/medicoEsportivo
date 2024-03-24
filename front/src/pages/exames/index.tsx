import React from 'react';

const exams = [
  {
    id: 1,
    name: 'Raio-X do tórax',
    date: '2024-03-20',
    downloadLink: 'https://example.com/download/xray',
  },
  {
    id: 2,
    name: 'Exame de sangue',
    date: '2024-03-22',
    downloadLink: 'https://example.com/download/bloodtest',
  },
  // Adicione mais exames conforme necessário
];

export default function ExamsView() {
  return (
    <div className="max-w-3xl mx-auto ">
      <h1 className="text-2xl font-semibold mb-4">Visualização de Exames</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {exams.map((exam) => (
          <li key={exam.id} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{exam.name}</p>
                <p className="mt-1 text-sm text-gray-500">Data: {exam.date}</p>
              </div>
              <div className="flex-shrink-0">
                <a href={exam.downloadLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md">Baixar</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
