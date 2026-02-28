import SystemStatus from "@/components/SystemStatus";
import MissionsList from "@/components/MissionsList";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">MWEZI Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SystemStatus />
        <MissionsList />
      </div>
    </main>
  );
}
