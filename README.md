<p align="center">

  <h1>🚀 JobPilot</h1>
  <p><b>Search smarter. Apply faster. Get hired.</b></p>

  <p>
    <a href="https://github.com/ravitharun"><img src="https://img.shields.io/badge/GitHub-ravitharun-blue?style=flat-square&logo=github" alt="GitHub"></a>
    <a href="#-project-status"><img src="https://img.shields.io/badge/Status-Under_Development-yellow?style=flat-square" alt="Status"></a>
    <a href="#-technology-stack"><img src="https://img.shields.io/badge/Tech_Stack-React_%7C_Spring_Boot_%7C_Selenium-success?style=flat-square" alt="Tech Stack"></a>
  </p>

</p>

---

## 📖 About JobPilot

**JobPilot** is a full-stack job search and application automation platform designed to help job seekers discover relevant opportunities, match jobs with their skills and preferences, streamline supported application workflows, and track applications from one centralized place.

Job seekers often need to search across multiple job portals and repeatedly enter the same information while applying. JobPilot aims to solve this friction through a unified dashboard and smart automation.

---

## ✨ Core Features

- **🔍 Multi-Portal Search:** Discover opportunities across multiple job boards from a single interface.
- **🎯 Advanced Filtering:** Filter jobs based on title, skills, location, experience, salary, work mode, and company.
- **🤖 Browser Automation:** Automate repetitive application workflows using Selenium WebDriver (respecting platform rules and stopping for human-in-the-loop verification like CAPTCHAs).
- **⚙️ Job Preferences:** Save and configure target job roles, expected CTC, work modes, and preferred locations.
- **📊 Application Tracking:** Maintain a clear history of job applications across statuses (_Saved, Applied, Pending, Interview, Rejected, Selected_).
- **📈 Interactive Dashboard:** Get an overview of your job search analytics, counts, and recent application timelines.

---

## 🏗️ Architecture

```text
🚀 JobPilot
│
▼
┌─────────────────────┐
│ ⚛️ React + TS UI    │
└──────────┬──────────┘
           │
        REST API
           │
           ▼
┌─────────────────────┐
│ ☕ Spring Boot API  │
│      Backend        │
└──────────┬──────────┘
           │
    ┌──────┴───────────────┐
    │                      │
    ▼                      ▼
┌──────────┐         ┌───────────┐         ┌──────────────┐
│ 🐬 MySQL │         │ 🤖 Selenium│         │ 🌐 Job Portal│
│ Database │         │ Automation│         │ Integrations │
└──────────┘         └─────┬─────┘         └──────────────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          Naukri        Indeed        Foundit
             │
             ▼
       Other Portals








```

---

## 🛠️ Technology Stack

### 🎨 Frontend

- **⚛️ React** — User interface
- **📘 TypeScript** — Type-safe frontend development
- **🎨 Tailwind CSS** — UI styling
- **⚡ Vite** — Frontend build tool
- **🌐 Axios** — API communication
- **🧭 React Router** — Application routing

### ☕ Backend

- **☕ Java** — Backend programming language
- **🍃 Spring Boot** — Backend framework
- **🌐 Spring Web** — RESTful APIs
- **🄵 Spring Data JPA** — Database access & persistence
- **🔐 Spring Security** — Authentication & authorization
- **🔑 JWT** — Token-based authentication
- **🛢️ Hibernate ORM** — Object-Relational Mapping
- **📦 Maven** — Dependency management

### 🗄️ Database

- **🐬 MySQL** — Relational database management system

### 🤖 Automation

- **🤖 Selenium WebDriver** — Browser automation for workflow processes

### 🧰 Development Tools

- **🐙 Git & GitHub** — Version control and source code hosting
- **📮 Postman** — API testing
- **💻 VS Code / IntelliJ IDEA** — Development environments
- **🐳 Docker** — Containerization

---

## 🌐 Planned Job Portals

JobPilot incorporates modular integration/automation handlers for popular job boards:

| Portal             | Status     | Portal               | Status     |
| :----------------- | :--------- | :------------------- | :--------- |
| 🟢 **Naukri**      | 🔄 Planned | 🔵 **LinkedIn Jobs** | 🔄 Planned |
| 🔵 **Indeed**      | 🔄 Planned | 🟢 **Wellfound**     | 🔄 Planned |
| 🟣 **Foundit**     | 🔄 Planned | 🟡 **Cutshort**      | 🔄 Planned |
| 🟠 **Internshala** | 🔄 Planned | 🔵 **Instahyre**     | 🔄 Planned |
| 🟠 **Hirist**      | 🔄 Planned |                      |            |

---

## 📁 Project Structure

```text
JobPilot/
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   ├── package.json
│   └── vite.config.ts
│
├── ☕ backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   └── pom.xml
│
├── 🤖 automation/
│   ├── selenium/
│   ├── portals/
│   └── workflows/
│
├── 🗄️ database/
│   └── schema/
│
├── 🐳 docker/
│
└── 📄 README.md
```
