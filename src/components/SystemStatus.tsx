'use client'

import { Activity, Server, Database, AlertCircle } from 'lucide-react'

export default function SystemStatus() {
  const systems = [
    { name: 'Farm', status: 'healthy', icon: Server },
    { name: 'NEON', status: 'healthy', icon: Database },
    { name: 'n8n', status: 'warning', icon: Activity },
    { name: 'Agent Zero', status: 'healthy', icon: Activity },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500'
      case 'warning': return 'text-yellow-500'
      case 'error': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5" />
        Statut Système
      </h2>
      <div className="space-y-3">
        {systems.map((system) => (
          <div key={system.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <system.icon className="w-4 h-4 text-gray-400" />
              <span>{system.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={getStatusColor(system.status)}>
                {system.status === 'healthy' ? '🟢' : system.status === 'warning' ? '🟡' : '🔴'}
              </span>
              <span className="text-sm text-gray-400">{system.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
