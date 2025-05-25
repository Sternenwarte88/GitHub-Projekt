# 💻 DevOps Abschlussprojekt – Lokale Infrastruktur für ein Entwicklerteam

Autor: Stefan | Level: Junior DevOps | Ziel: Alle erlernten Tools praxisnah einsetzen und beweisen

---

## 🚀 Projektziel

In diesem Projekt baue ich eine komplett lokale DevOps-Infrastruktur auf, die typische Cloud-Funktionen emuliert – ohne AWS oder Azure, aber mit Tools aus der realen Praxis. Ziel ist eine Umgebung, in der Entwickler ihren Code versionieren, testen, containerisieren und in Kubernetes deployen können.

---

## 🧰 Verwendeter Stack

| Tool           | Zweck                                  |
|----------------|----------------------------------------|
| Docker         | Containerisierung                      |
| Kubernetes     | Orchestrierung (lokal via k3s/kind)    |
| Git            | Codeverwaltung                         |
| GitHub Actions | CI/CD für Linting & Testing            |
| Jenkins        | Erweiterte CI/CD-Pipeline              |
| Terraform      | Infrastruktur (VirtualBox + Netzwerke) |
| Ansible        | Konfiguration & Provisionierung        |
| VirtualBox     | Lokale virtuelle Maschinen             |
| Bash / Python  | Automatisierung & Health Checks        |
| VPC (lokal)    | Segmentierung über Netzwerkinterfaces  |

---

## 📦 Projektstruktur

.
├── app/                  # Beispielanwendung (Node.js + MySQL)
│   ├── backend/          # Gästebuch-App mit Express + MySQL
│   └── mysql/            # Konfiguration und Seed-SQL
├── infra/
│   ├── terraform/        # VM-Provisionierung mit VirtualBox
│   └── ansible/          # Konfiguration der VMs
├── kubernetes/
│   ├── app/              # Deployments, Services, Ingress für App
│   └── mysql/            # Deployments, PVC, Secrets für MySQL
├── scripts/              # Bash- und Python-Skripte
├── jenkins/              # Pipeline-Definitionen
├── .github/workflows/    # GitHub Actions CI
└── README.md

---

## 🔄 Projektphasen

### ✅ Phase 1 – Infrastruktur mit VirtualBox
- Erstelle 2–3 VMs via Terraform (dev, ci, optional monitoring)
- Netzwerk-Setup wie eine VPC: NAT + internes Netz
- Per Ansible:
  - Benutzer sloec mit sudo
  - Docker, Git, Node, Python, Jenkins, k3s installieren
  - SSH-Härtung, Firewall & Basis-Setup

### ✅ Phase 2 – CI/CD mit GitHub Actions & Jenkins
- GitHub Actions:
  - Code-Check, Linting, Tests
- Jenkins (auf separater VM):
  - Container-Build + Push in lokale Registry (optional)
  - Automatisiertes Deployment ins Kubernetes-Cluster

### ✅ Phase 3 – Beispiel-App + MySQL
- Node.js-Backend (Guestbook) mit Dockerfile
- MySQL-Container mit init.sql und Persistenz via PVC
- Kubernetes-Deployments für App & DB
- ConfigMaps für Umgebungsvariablen
- Secrets für MySQL-Zugang
- Ingress für Frontend-Zugriff (optional statisches HTML-Formular)

### ✅ Phase 4 – Automatisierung & Security
- Bash/Python:
  - Healthcheck-Skript für Kubernetes
  - Backup-Skript für MySQL-DB oder Jenkins-Konfig
  - Alerting per Mail/Shell bei Ausfällen
- Konfigurationshärtung:
  - SSH
  - CI/CD Secrets Management
  - Least Privilege für Jenkins + GitHub

---

## 🧠 Bonus (optional)
- Lokale Docker-Registry für Images
- Monitoring: Prometheus + Grafana
- Logaggregation mit Loki oder ELK
- Helm-Chart für App
- Multi-Environment-Setup: dev / staging / production

---

## 🎯 Ziel

Dieses Projekt zeigt meine Fähigkeit, eine Infrastruktur von Grund auf zu planen, zu automatisieren und produktionsnah zu betreiben – ohne Cloudkosten, aber mit professionellen DevOps-Praktiken. Das Setup ist als Bewerbungsprojekt, Lernbasis und technisches Portfolio gedacht.

---

## 🗂 Lizenz

MIT – frei nutzbar und erweiterbar.
