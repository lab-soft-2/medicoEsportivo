import React from 'react';

const exams = [
  {
    nomePaciente: "Jailson Mendes",
    documentoPaciente: "123.123.123.23",
    nomeExame: "Mamografia",
    dataExame: "22/03/2024"
  },
  {
    nomePaciente: "Jailson Mendes",
    documentoPaciente: "123.123.123.23",
    nomeExame: "Mamografia",
    dataExame: "22/03/2024"
  }

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
                <p className="text-sm font-semibold text-gray-900">{exam.nomePaciente}</p>
                <p className="mt-1 text-sm text-gray-500">CPF: {exam.documentoPaciente}</p>
                <p className="mt-1 text-sm text-gray-500">Exame: {exam.nomeExame}</p>
              </div>
              <div className="flex-shrink-0">
                <a href={exam.dataExame} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md">Baixar</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
