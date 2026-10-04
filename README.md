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

*   **🔍 Multi-Portal Search:** Discover opportunities across multiple job boards from a single interface.
*   **🎯 Advanced Filtering:** Filter jobs based on title, skills, location, experience, salary, work mode, and company.
*   **🤖 Browser Automation:** Automate repetitive application workflows using Selenium WebDriver (respecting platform rules and stopping for human-in-the-loop verification like CAPTCHAs).
*   **⚙️ Job Preferences:** Save and configure target job roles, expected CTC, work modes, and preferred locations.
*   **📊 Application Tracking:** Maintain a clear history of job applications across statuses (*Saved, Applied, Pending, Interview, Rejected, Selected*).
*   **📈 Interactive Dashboard:** Get an overview of your job search analytics, counts, and recent application timelines.

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




       