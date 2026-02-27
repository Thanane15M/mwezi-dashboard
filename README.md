# 🌙 MWEZI Dashboard

Dashboard de monitoring pour l'infrastructure ELYSIUM — construit avec Next.js, Tailwind CSS et Recharts.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Vercel](https://img.shields.io/badge/Vercel-deployed-brightgreen)

## 🚀 Démo

🔗 [https://mwezi-dashboard.vercel.app](https://mwezi-dashboard.vercel.app)

## ✨ Fonctionnalités

- 📊 **Métriques système** — CPU, RAM, Disk, Network en temps réel
- 🎯 **Missions actives** — Suivi des missions Agent Zero (P0/P1/P2)
- 🟢 **Statut système** — Monitoring Farm, NEON, n8n, Agent Zero
- 🌙 **Dark mode** — Interface optimisée nuit
- 📱 **Responsive** — Mobile, tablet, desktop

## 🛠 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions

## 🚀 Déploiement

### Local
```bash
npm install
npm run dev
# http://localhost:3000
```

### Production
```bash
npm run build
# Output: dist/
```

## 📊 Dashboard Sections

### SystemStatus
- 🟢 Farm: Opérationnel
- 🟢 NEON: Connecté
- 🟡 n8n: Warning
- 🟢 Agent Zero: Actif

### MissionsList
- Liste des missions P0/P1/P2
- Statut: active / in_progress / completed
- Priorités colorées

### MetricsChart
- Graphique en barres des métriques
- Alertes visuelles si > 80%

## 📝 License

MIT — ELYSIUM Infrastructure

---
Built with ❤️ by MWEZI
