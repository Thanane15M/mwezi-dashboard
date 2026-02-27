'use client'

import { Target, AlertCircle, CheckCircle, Clock } from 'lucide-react'

const missions = [
  { id: 1, name: 'EXTRACTION_CCI_MAYOTTE', priority: 'P0', status: 'active' },
  { id: 2, name: 'EXTRACTION_JO_MAYOTTE', priority: 'P0', status: 'active' },
  { id: 3, name: 'WEBAPP_FACTORY_FIRST_DEPLOY', priority: 'P0', status: 'in_progress' },
  { id: 4, name: 'UPGRADE_PICOCLAW_MISTRAL', priority: 'P1', status: 'pending' },
]

export default function MissionsList() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'P0': return 'text-red-400 bg-red-400/10'
      case 'P1': return 'text-yellow-400 bg-yellow-400/10'
      case 'P2': return 'text-blue-400 bg-blue-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Target className="w-5 h-5" />
        Missions Actives
      </h2>
      <div className="space-y-2">
        {missions.map((mission) => (
          <div key={mission.id} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
            <div className="flex items-center gap-3">
              {mission.status === 'completed' ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : mission.status === 'in_progress' ? (
                <Clock className="w-4 h-4 text-blue-500 animate-pulse" />
              ) : (
                <AlertCircle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-sm">{mission.name}</span>
            </div>
            <span className={"text-xs px-2 py-1 rounded " + getPriorityColor(mission.priority)}>
              {mission.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
