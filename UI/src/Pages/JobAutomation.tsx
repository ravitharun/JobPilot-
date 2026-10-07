import {
  FiPlay,
  FiPause,
  FiSettings,
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
} from "react-icons/fi"
import MainSidebar from "../Components/MainSidebar"
import Headers from "../Components/Headers"
import MobileNavigation from "../Components/MobileNav"
import { useSelector } from "react-redux";

function JobAutomation() {

  const Theme = useSelector((state: any) => state.counter.value);
  return (
    <>
      <div
        className={`min-h-screen ${Theme
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-800"
          }`}
      >
        <MainSidebar />
        <MobileNavigation />

        <main className="lg:ml-64">
          <Headers />

          <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">

            {/* Page Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <FiZap
                    className={Theme ? "text-white" : "text-slate-900"}
                    size={18}
                  />

                  <span className="text-sm font-medium text-slate-500">
                    Automation
                  </span>
                </div>

                <h1
                  className={`text-2xl font-bold ${Theme ? "text-white" : "text-slate-900"
                    }`}
                >
                  Job Automation
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Manage your automated job search and applications.
                </p>
              </div>

              <button
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold shadow-sm transition ${Theme
                  ? "border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
              >
                <FiSettings size={17} />
                Settings
              </button>
            </div>

            {/* Automation Status */}
            <section className="rounded-2xl bg-slate-900 p-5 text-white shadow-sm sm:p-6">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                    <span className="text-sm font-medium text-emerald-300">
                      Automation Active
                    </span>
                  </div>

                  <h2 className="text-xl font-bold sm:text-2xl">
                    Your job search is running
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    JobPilot is currently searching for matching jobs.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    <FiPause size={16} />
                    Pause
                  </button>

                  <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                    <FiPlay size={16} />
                    Restart
                  </button>
                </div>

              </div>
            </section>

            {/* Automation Stats */}
            <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {/* Jobs Found */}
              <div
                className={`rounded-2xl border p-5 shadow-sm ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${Theme
                    ? "bg-slate-800 text-slate-200"
                    : "bg-slate-100 text-slate-700"
                    }`}
                >
                  <FiSearch size={19} />
                </div>

                <p className="text-sm text-slate-500">
                  Jobs Found
                </p>

                <h3
                  className={`mt-1 text-2xl font-bold ${Theme ? "text-white" : "text-slate-900"
                    }`}
                >
                  248
                </h3>
              </div>

              {/* Applications */}
              <div
                className={`rounded-2xl border p-5 shadow-sm ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${Theme
                    ? "bg-slate-800 text-slate-200"
                    : "bg-slate-100 text-slate-700"
                    }`}
                >
                  <FiBriefcase size={19} />
                </div>

                <p className="text-sm text-slate-500">
                  Applications
                </p>

                <h3
                  className={`mt-1 text-2xl font-bold ${Theme ? "text-white" : "text-slate-900"
                    }`}
                >
                  42
                </h3>
              </div>

              {/* Pending */}
              <div
                className={`rounded-2xl border p-5 shadow-sm ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${Theme
                    ? "bg-slate-800 text-slate-200"
                    : "bg-slate-100 text-slate-700"
                    }`}
                >
                  <FiClock size={19} />
                </div>

                <p className="text-sm text-slate-500">
                  Pending
                </p>

                <h3
                  className={`mt-1 text-2xl font-bold ${Theme ? "text-white" : "text-slate-900"
                    }`}
                >
                  18
                </h3>
              </div>

              {/* Successful */}
              <div
                className={`rounded-2xl border p-5 shadow-sm ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${Theme
                    ? "bg-slate-800 text-slate-200"
                    : "bg-slate-100 text-slate-700"
                    }`}
                >
                  <FiCheckCircle size={19} />
                </div>

                <p className="text-sm text-slate-500">
                  Successful
                </p>

                <h3
                  className={`mt-1 text-2xl font-bold ${Theme ? "text-white" : "text-slate-900"
                    }`}
                >
                  31
                </h3>
              </div>

            </section>

            {/* Bottom Content */}
            <div className="grid gap-6 xl:grid-cols-3">

              {/* Automation Preferences */}
              <section
                className={`rounded-2xl border shadow-sm xl:col-span-2 ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >

                <div
                  className={`flex items-center justify-between border-b px-5 py-4 sm:px-6 ${Theme ? "border-slate-700" : "border-slate-100"
                    }`}
                >
                  <div>
                    <h3
                      className={`font-bold ${Theme ? "text-white" : "text-slate-900"
                        }`}
                    >
                      Automation Preferences
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Define which jobs JobPilot should search for.
                    </p>
                  </div>

                  <FiSettings className="text-slate-400" size={19} />
                </div>

                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">

                  {/* Job Role */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Job Role
                    </p>

                    <div
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${Theme
                        ? "border-slate-700 bg-slate-800"
                        : "border-slate-200"
                        }`}
                    >
                      <FiBriefcase className="text-slate-400" />

                      <span
                        className={`text-sm font-medium ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        Java Full Stack Developer
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Location
                    </p>

                    <div
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${Theme
                        ? "border-slate-700 bg-slate-800"
                        : "border-slate-200"
                        }`}
                    >
                      <FiMapPin className="text-slate-400" />

                      <span
                        className={`text-sm font-medium ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        Bengaluru, Hyderabad
                      </span>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Experience
                    </p>

                    <div
                      className={`rounded-xl border px-4 py-3 ${Theme
                        ? "border-slate-700 bg-slate-800"
                        : "border-slate-200"
                        }`}
                    >
                      <span
                        className={`text-sm font-medium ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        Fresher / 0–1 Years
                      </span>
                    </div>
                  </div>

                  {/* Daily Limit */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Daily Application Limit
                    </p>

                    <div
                      className={`rounded-xl border px-4 py-3 ${Theme
                        ? "border-slate-700 bg-slate-800"
                        : "border-slate-200"
                        }`}
                    >
                      <span
                        className={`text-sm font-medium ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        25 Applications
                      </span>
                    </div>
                  </div>

                </div>

                <div
                  className={`border-t px-5 py-4 sm:px-6 ${Theme ? "border-slate-700" : "border-slate-100"
                    }`}
                >
                  <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                    <FiSettings size={16} />
                    Edit Preferences
                  </button>
                </div>

              </section>

              {/* Recent Activity */}
              <section
                className={`rounded-2xl border shadow-sm ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >

                <div
                  className={`border-b px-5 py-4 ${Theme ? "border-slate-700" : "border-slate-100"
                    }`}
                >
                  <h3
                    className={`font-bold ${Theme ? "text-white" : "text-slate-900"
                      }`}
                  >
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Latest automation activity
                  </p>
                </div>

                <div className="space-y-5 p-5">

                  {/* Activity 1 */}
                  <div className="flex gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${Theme ? "bg-slate-800" : "bg-slate-100"
                        }`}
                    >
                      <FiCheckCircle
                        className="text-emerald-600"
                        size={16}
                      />
                    </div>

                    <div>
                      <p
                        className={`text-sm font-semibold ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        Application submitted
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Java Developer · 5 min ago
                      </p>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="flex gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${Theme ? "bg-slate-800" : "bg-slate-100"
                        }`}
                    >
                      <FiSearch
                        className={
                          Theme ? "text-slate-300" : "text-slate-700"
                        }
                        size={16}
                      />
                    </div>

                    <div>
                      <p
                        className={`text-sm font-semibold ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        12 new jobs found
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        18 min ago
                      </p>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="flex gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${Theme ? "bg-slate-800" : "bg-slate-100"
                        }`}
                    >
                      <FiAlertCircle
                        className="text-amber-600"
                        size={16}
                      />
                    </div>

                    <div>
                      <p
                        className={`text-sm font-semibold ${Theme ? "text-slate-200" : "text-slate-700"
                          }`}
                      >
                        Application skipped
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Missing required skill · 32 min ago
                      </p>
                    </div>
                  </div>

                </div>

              </section>





            </div>
            <div className="w-full space-y-4">
              {/* Header */}
              <div
                className={`rounded-xl border px-5 py-4 ${Theme
                    ? "border-slate-700 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-900"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h1
                      className={`text-xl font-bold ${Theme ? "text-white" : "text-slate-900"
                        }`}
                    >
                      Logs
                    </h1>

                    <p
                      className={`mt-1 text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                        }`}
                    >
                      Monitor application activity and events
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${Theme
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    6 Logs
                  </span>
                </div>
              </div>

              {/* Logs */}
              <div
                className={`w-full overflow-hidden rounded-xl border ${Theme
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white"
                  }`}
              >
                {[
                  {
                    time: "10:42:18 AM",
                    type: "SUCCESS",
                    message: "Application submitted successfully",
                    job: "Java Developer — Infosys",
                  },
                  {
                    time: "10:41:52 AM",
                    type: "INFO",
                    message: "Job found and added to application queue",
                    job: "Spring Boot Developer — TCS",
                  },
                  {
                    time: "10:40:31 AM",
                    type: "SUCCESS",
                    message: "Application submitted successfully",
                    job: "Full Stack Developer — Accenture",
                  },
                  {
                    time: "10:39:14 AM",
                    type: "INFO",
                    message: "Searching for matching jobs",
                    job: "Java / Spring Boot — Bengaluru",
                  },
                  {
                    time: "10:37:46 AM",
                    type: "WARNING",
                    message: "Job skipped because salary did not match preference",
                    job: "Software Engineer — Wipro",
                  },
                  {
                    time: "10:35:22 AM",
                    type: "ERROR",
                    message: "Failed to submit application",
                    job: "Java Developer — Cognizant",
                  },
                ].map((log, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-3 border-b px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between ${Theme
                        ? "border-slate-800 hover:bg-slate-800/50"
                        : "border-slate-100 hover:bg-slate-50"
                      }`}
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-md px-2 py-1 text-[10px] font-bold ${log.type === "SUCCESS"
                              ? Theme
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-emerald-50 text-emerald-600"
                              : log.type === "ERROR"
                                ? Theme
                                  ? "bg-red-500/10 text-red-400"
                                  : "bg-red-50 text-red-600"
                                : log.type === "WARNING"
                                  ? Theme
                                    ? "bg-amber-500/10 text-amber-400"
                                    : "bg-amber-50 text-amber-600"
                                  : Theme
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-blue-50 text-blue-600"
                            }`}
                        >
                          {log.type}
                        </span>

                        <p
                          className={`text-sm font-medium ${Theme
                              ? "text-slate-200"
                              : "text-slate-800"
                            }`}
                        >
                          {log.message}
                        </p>
                      </div>

                      <p
                        className={`mt-1 text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                          }`}
                      >
                        {log.job}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 text-xs ${Theme ? "text-slate-500" : "text-slate-400"
                        }`}
                    >
                      {log.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </>

  )
}

export default JobAutomation

