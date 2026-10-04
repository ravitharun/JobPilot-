<p align="center">

<h1>🚀 JobPilot</h1>

<p><b>Search smarter. Apply faster. Get hired.</b></p>

<p> <a href="https://github.com/ravitharun"> <img src="https://img.shields.io/badge/GitHub-ravitharun-blue?style=flat-square&logo=github" alt="GitHub"> </a> <a href="#-project-status"> <img src="https://img.shields.io/badge/Status-Under_Development-yellow?style=flat-square" alt="Status"> </a> <a href="#-technology-stack"> <img src="https://img.shields.io/badge/Tech_Stack-React_%7C_Spring_Boot_%7C_Selenium-success?style=flat-square" alt="Tech Stack"> </a> </p>

</p>

📖 About JobPilot

JobPilot is a full-stack job search and application automation platform designed to help job seekers discover relevant opportunities, match jobs with their skills and preferences, streamline supported application workflows, and track applications from one centralized place.

Job seekers often need to search across multiple job portals and repeatedly enter the same information while applying. JobPilot aims to solve this friction through a unified dashboard and smart automation.

✨ Core Features
🔍 Multi-Portal Search: Discover opportunities across multiple job boards from a single interface.
🎯 Advanced Filtering: Filter jobs based on title, skills, location, experience, salary, work mode, and company.
🤖 Browser Automation: Automate repetitive application workflows using Selenium WebDriver while respecting platform rules and stopping for human-in-the-loop verification such as CAPTCHAs.
⚙️ Job Preferences: Save and configure target job roles, expected CTC, work modes, and preferred locations.
📊 Application Tracking: Maintain a clear history of job applications across statuses — Saved, Applied, Pending, Interview, Rejected, Selected.
📈 Interactive Dashboard: Get an overview of job-search analytics, application counts, and recent application activity.
🏗️ Architecture
                         🚀 JobPilot
                              │
                              ▼
                  ┌─────────────────────┐
                  │   ⚛️ React + TS UI   │
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
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐   ┌────────────┐  ┌──────────────┐
        │ 🐬 MySQL │   │ 🤖 Selenium│  │ 🌐 Job Portal│
        │ Database │   │ Automation │  │ Integrations │
        └──────────┘   └──────┬─────┘  └──────────────┘
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
              Naukri        Indeed       Foundit
                 │
                 ▼
           Other Portals
🛠️ Technology Stack
🎨 Frontend
Technology	Purpose
⚛️ React	User Interface
📘 TypeScript	Type-safe development
🎨 Tailwind CSS	UI styling
⚡ Vite	Build tool
🌐 Axios	API communication
🧭 React Router	Routing
☕ Backend
Technology	Purpose
☕ Java	Backend programming
🍃 Spring Boot	Backend framework
🌐 Spring Web	REST APIs
🗄️ Spring Data JPA	Database access
🔐 Spring Security	Security
🎫 JWT	Authentication
🛢️ Hibernate	ORM
📦 Maven	Dependency management
🗄️ Database
Technology	Purpose
🐬 MySQL	Relational database
🔗 JPA	Persistence
🛢️ Hibernate	ORM
🤖 Automation
Technology	Purpose
🤖 Selenium WebDriver	Browser automation
🌐 Browser Automation	Job workflows
⚙️ Automation Workflows	Application processing
🧰 Development Tools
Tool	Purpose
🐙 Git	Version control
🐙 GitHub	Source code hosting
📮 Postman	API testing
💻 VS Code	Frontend development
☕ IntelliJ IDEA / Eclipse	Java development
🐳 Docker	Containerization
✨ Planned Features
🔐 User Authentication

Users will be able to securely manage their JobPilot account.

👤 User registration
🔑 Login / Logout
🔒 Password hashing
🎫 JWT authentication
🛡️ Protected APIs
👨‍💼 User profile management
👤 Job Preferences

Users can configure their preferred job-search criteria.

💼 Job Role      : Java Full Stack Developer
🎓 Experience    : Fresher / 0-1 Years
📍 Location      : Bengaluru, Hyderabad
🏠 Work Mode     : Remote / Hybrid / WFO
💰 Expected CTC  : ₹4-8 LPA
🧠 Skills        : Java, Spring Boot, React, SQL
🔎 Job Search

Users will be able to search and filter jobs using:

💼 Job title
🧠 Skills
📍 Location
🎓 Experience
💰 Salary
🏠 Work mode
🏢 Company
🌐 Job portal
🤖 Job Automation

The automation module will use Selenium WebDriver for supported browser-based workflows.

▶️ Start Automation
        │
        ▼
🔐 Login to Job Portal
        │
        ▼
🔎 Search Jobs
        │
        ▼
📋 Read Job Listings
        │
        ▼
🎯 Apply Filters
        │
        ▼
📄 Check Job Requirements
        │
        ▼
🧠 Match User Profile
        │
        ▼
📂 Open Application
        │
        ▼
✍️ Fill Supported Fields
        │
        ▼
📤 Submit Application
        │
        ▼
💾 Save Application Status

⚠️ Automation will respect each platform's applicable rules and stop for user interaction when additional verification, CAPTCHA, or other manual action is required.

🌐 Planned Job Portals
Portal	Status
🟢 Naukri	🔄 Planned
🔵 Indeed	🔄 Planned
🟣 Foundit	🔄 Planned
🟠 Internshala	🔄 Planned
🔵 LinkedIn Jobs	🔄 Planned
🟢 Wellfound	🔄 Planned
🟡 Cutshort	🔄 Planned
🔵 Instahyre	🔄 Planned
🟠 Hirist	🔄 Planned

Portal support will be added incrementally based on technical feasibility and each platform's applicable terms and access mechanisms.

📊 Application Tracking
🏢 Company	💼 Position	🌐 Portal	📌 Status
ABC Technologies	Java Developer	Naukri	🟢 Applied
XYZ Solutions	Full Stack Developer	Indeed	🟡 Pending
Tech Company	Software Engineer	Foundit	🔴 Rejected
📌 Application Status
💾 Saved
🟢 Applied
🟡 Pending
🧑‍💻 Interview
🔴 Rejected
🎉 Selected
📈 Dashboard
╔══════════════════════════════════════╗
║             🚀 JobPilot              ║
╠══════════════════════════════════════╣
║ 🔎 Jobs Found          128            ║
║ 🎯 Jobs Matched         42            ║
║ 📤 Applications         25            ║
║ 🧑‍💻 Interviews           4            ║
║ ❌ Rejected              8            ║
╚══════════════════════════════════════╝
📋 Recent Applications
☕ Java Developer          → 🟢 Applied
⚛️ Full Stack Developer    → 🧑‍💻 Interview
💻 Software Engineer       → 🟡 Pending
🗄️ Planned Database Structure
👤 User
 │
 ├── 👨‍💼 UserProfile
 │
 ├── 📄 Resume
 │
 ├── ⚙️ JobPreference
 │
 └── 📤 Application
          │
          ▼
       💼 Job
          │
          ▼
      🌐 JobPortal
🔄 Overall Application Flow
             👤 USER
                │
                ▼
        ┌───────────────┐
        │ 🔐 Login      │
        └───────┬───────┘
                │
                ▼
        ┌────────────────┐
        │ ⚙️ Preferences │
        └───────┬────────┘
                │
                ▼
        ┌───────────────┐
        │ 🔎 Search Jobs│
        └───────┬───────┘
                │
                ▼
        ┌────────────────┐
        │ 🌐 Job Portals │
        └───────┬────────┘
                │
                ▼
        ┌────────────────┐
        │ 🎯 Match &     │
        │    Filter      │
        └───────┬────────┘
                │
                ▼
        ┌────────────────┐
        │ 📤 Apply / Save│
        └───────┬────────┘
                │
                ▼
        ┌────────────────┐
        │ 📊 Track Status│
        └───────┬────────┘
                │
                ▼
           📈 DASHBOARD
📁 Planned Project Structure
JobPilot/
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── ☕ backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   │
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
🔐 Security
🛡️ Planned Security Features
🔐 JWT authentication
🔒 Password hashing
🛡️ Spring Security
🌐 Protected REST APIs
🔑 Environment variables for secrets
🗄️ Secure database configuration
✅ Input validation
👮 API authorization
🚫 Sensitive Data

The following information will not be committed to GitHub:

🔑 Database passwords
🎫 JWT secrets
🔐 Portal credentials
🔑 API keys
🚀 Development Roadmap
📌 Phase 1 — Project Setup

⚛️ Create React + TypeScript frontend

🎨 Configure Tailwind CSS

☕ Create Spring Boot backend

🐬 Configure MySQL

🐙 Configure Git/GitHub

🏗️ Create basic project architecture

📌 Phase 2 — Authentication

👤 User registration

🔑 Login

🎫 JWT authentication

🛡️ Spring Security

👨‍💼 User profile

📌 Phase 3 — Job Management

💼 Job entity

🔎 Job search API

🎯 Job filters

⚙️ Job preferences

💾 Save jobs

📊 Application tracking

📌 Phase 4 — Automation

🤖 Selenium setup

🧩 Portal automation architecture

🌐 Naukri workflow

🌐 Additional portal integrations

⏰ Automation scheduler

📝 Execution logs

📌 Phase 5 — Dashboard

📊 Application statistics

📈 Job analytics

🤖 Automation history

📌 Application status tracking

🔎 Search history

📌 Phase 6 — Deployment

🐳 Dockerize backend

🗄️ Production database

🌐 Deploy frontend

☁️ Deploy backend

⚙️ Environment configuration

📡 Production monitoring

💡 Future Improvements
🤖 AI-based job matching
📄 Resume-to-job matching
🧠 Resume keyword analysis
🎯 Job recommendation system
⏰ Automated application scheduling
📧 Email notifications
📊 Advanced application analytics
📑 Resume version management
🧑‍💻 Interview tracking
⭐ Job recommendation scoring
🎯 Project Objective

JobPilot is being developed as a practical full-stack + automation project demonstrating:

⚛️ React
📘 TypeScript
🎨 Tailwind CSS
☕ Java
🍃 Spring Boot
🔐 Spring Security
🌐 REST APIs
🐬 MySQL
🤖 Selenium
🐳 Docker
🐙 Git / GitHub

The goal is to build a scalable platform combining:

💻 Modern Web Development + ☕ Backend Engineering + 🗄️ Database Management + 🤖 Browser Automation + 📊 Job Application Tracking

into one practical project.

📌 Project Status

🚧 Currently Under Development

The project is being developed incrementally, starting with the frontend and core application architecture.

More features and integrations will be added progressively.

👨‍💻 Author
Ravi Tharun

🐙 GitHub: github.com/ravitharun

⭐ Support

If you find JobPilot interesting, consider giving the repository a ⭐ Star.

<p align="center">

🚀 <b>JobPilot</b><br>
<i>Search smarter. Apply faster. Get hired.</i>

</p>