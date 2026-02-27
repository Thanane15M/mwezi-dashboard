'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'CPU', value: 45, max: 100 },
  { name: 'RAM', value: 32, max: 100 },
  { name: 'Disk', value: 89, max: 100 },
  { name: 'Network', value: 23, max: 100 },
]

export default function MetricsChart() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Métriques Système</h2>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar dataKey="value" fill="#0EA5E9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center">
        {data.map((item) => (
          <div key={item.name} className="text-sm">
            <div className="text-gray-400">{item.name}</div>
            <div className={"font-semibold " + (item.value > 80 ? 'text-red-400' : 'text-green-400')}>
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
