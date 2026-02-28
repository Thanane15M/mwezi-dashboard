const missions = [
  { id: 1, name: "WebApp Dashboard", status: "active", priority: "P0" },
  { id: 2, name: "Landing Agence", status: "pending", priority: "P1" },
];

export default function MissionsList() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-white">Missions</h2>
      {missions.map(m => (
        <div key={m.id} className="flex justify-between p-3 bg-gray-800 rounded mb-2">
          <span className="text-gray-200">{m.name}</span>
          <span className="px-2 py-1 text-xs rounded bg-red-900 text-red-200">{m.priority}</span>
        </div>
      ))}
    </div>
  );
}
