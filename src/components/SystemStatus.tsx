export default function SystemStatus() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-white">Statut Système</h2>
      <div className="flex items-center gap-4">
        <span className="text-4xl">🟢</span>
        <span className="text-lg font-medium text-green-500">Tous systèmes opérationnels</span>
      </div>
    </div>
  );
}
