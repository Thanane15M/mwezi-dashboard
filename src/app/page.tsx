import SystemStatus from '@/components/SystemStatus'
import MissionsList from '@/components/MissionsList'
import MetricsChart from '@/components/MetricsChart'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">🌙 MWEZI Dashboard</h1>
        <p className="text-gray-400">Monitoring système ELYSIUM</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SystemStatus />
        <MissionsList />
        <MetricsChart />
      </div>
    </main>
  )
}
