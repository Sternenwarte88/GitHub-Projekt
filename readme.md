# 💻 DevOps Final Project – Local Infrastructure for a Development Team

Author: Stephan  
Level: Junior DevOps  
Goal: Apply the DevOps tools you have learned in a realistic, hands-on project

---

## 🚀 Project Goal

This project simulates the setup and operation of a local DevOps infrastructure.  
The goal is to implement typical cloud functions such as version control, CI/CD, containerization and Kubernetes deployment **locally** – without AWS or Azure, but using professional open-source tools.

---

## 🧰 Tech Stack Used

| Tool           | Purpose                                   |
| -------------- | ----------------------------------------- |
| Docker         | Containerization of the application       |
| Kubernetes     | Orchestration (locally with k3s/kind)     |
| Git            | Source code management                    |
| GitHub Actions | CI/CD for linting and tests               |
| MySQL          | Relational database for the guestbook app |

> Note: Infrastructure provisioning tools such as Terraform or Ansible were intentionally not implemented, because in a purely local environment without cloud or dedicated servers they can only be demonstrated in a limited way.

---

## 📦 Project Structure

```
.
├── app/                  Example application (Node.js + MySQL)
│   ├── backend/          REST API & static file serving
│   └── mysql/            Configuration and seed SQL
├── kubernetes/
│   ├── app/              Deployments, Services, Ingress for the app
│   └── mysql/            Deployments, PVC, Secrets for MySQL
├── scripts/              Bash and Python scripts (health/backup)
├── .github/workflows/    GitHub Actions CI pipeline
└── README.md
```

---

## 🔄 Project Phases

### ✅ Phase 1 – Local Development

- Develop a guestbook app with Node.js and MySQL
- Frontend (HTML, CSS, JS) + REST API in the same container

### ✅ Phase 2 – Dockerization

- Create Dockerfiles for backend and database
- Use Docker Compose for local testing
- Persist MySQL using a Docker volume

### ✅ Phase 3 – CI/CD with GitHub Actions

- Set up a GitHub repository with a CI workflow
- Linting, tests and automatic build on push

### ✅ Phase 4 – Kubernetes Deployment

- YAML definitions for app, MySQL, secrets and PVC
- Ingress routing to the frontend (optionally static via NGINX)
- Deployment and testing inside the VM (k3s)

---
