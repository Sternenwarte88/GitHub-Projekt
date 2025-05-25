# 💻 DevOps Abschlussprojekt – Lokale Infrastruktur für ein Entwicklerteam

Autor: Stefan  
Level: Junior DevOps  
Ziel: Erlernte DevOps-Tools in einem realistischen Praxisprojekt anwenden

---

## 🚀 Projektziel

Dieses Projekt simuliert den Aufbau und Betrieb einer lokalen DevOps-Infrastruktur.  
Ziel ist es, typische Cloud-Funktionen wie Versionierung, CI/CD, Containerisierung und Kubernetes-Deployment **lokal** umzusetzen – ohne AWS oder Azure, aber mit professionellen Open-Source-Tools.

---

## 🧰 Verwendeter Stack

| Tool           | Zweck                                  |
|----------------|----------------------------------------|
| Docker         | Containerisierung der Anwendung        |
| Kubernetes     | Orchestrierung (lokal mit k3s/kind)    |
| Git            | Codeverwaltung                         |
| GitHub Actions | CI/CD für Linting & Tests              |
| Bash / Python  | Healthchecks & Backup-Automatisierung  |
| MySQL          | Relationale Datenbank für Gästebuch    |

---

## 📦 Projektstruktur

    .  
    ├── app/                     Beispielanwendung (Node.js + MySQL)  
    │   ├── backend/             REST-API & statisches Serving  
    │   └── mysql/               Konfiguration und Seed-SQL  
    ├── kubernetes/  
    │   ├── app/                 Deployments, Services, Ingress für App  
    │   └── mysql/               Deployments, PVC, Secrets für MySQL  
    ├── scripts/                 Bash- und Python-Skripte (Health/Backup)  
    ├── .github/workflows/       GitHub Actions CI-Pipeline  
    └── README.md

---

## 🔄 Projektphasen

### ✅ Phase 1 – Lokale Entwicklung

- Entwicklung einer Gästebuch-App mit Node.js und MySQL
- Frontend (HTML, CSS, JS) + REST-API im selben Container

### ✅ Phase 2 – Dockerisierung

- Erstellung von Dockerfiles für Backend + DB
- Nutzung von Docker Compose zum lokalen Testen
- MySQL persistiert mit Docker Volume

### ✅ Phase 3 – CI/CD mit GitHub Actions

- Einrichtung eines GitHub-Repos mit CI-Workflow
- Linting, Tests und automatischer Build beim Push

### ✅ Phase 4 – Kubernetes Deployment

- YAML-Definitionen für App, MySQL, Secrets und PVC
- Ingress-Routing zum Frontend (optional statisch via NGINX)
- Simulation eines produktionsnahen Deployments mit Minikube oder k3s

### ✅ Phase 5 – Automation & Wartung

- Bash-/Python-Skripte:
  - Healthchecks für Pod-Zustände
  - Datenbank-Backups über Cronjob oder Shellscript

---

## 🧠 Bonus (optional)

- Lokale Docker Registry
- Helm-Chart für App-Deployment
- Vorbereitung auf Multi-Environment (dev/staging)

---

## 🎯 Ziel

Dieses Projekt zeigt meine Fähigkeit, eine Entwicklungsinfrastruktur lokal zu planen, zu automatisieren und produktionsnah zu betreiben – ohne Cloudkosten, aber mit solider DevOps-Praxis.  
Es dient als **Lernprojekt, technisches Portfolio und Bewerbungsnachweis**.

---

## 🗂 Lizenz

MIT – frei nutzbar und erweiterbar.
