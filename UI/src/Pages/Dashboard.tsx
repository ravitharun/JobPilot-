import {
  FiBriefcase,


  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiChevronRight,

} from "react-icons/fi";

import MainSidebar from "../Components/MainSidebar";
import Headers from "../Components/Headers";
import MobileNavigation from "../Components/MobileNav";
import { useSelector } from "react-redux";


const applications = [
  {
    company: "Infosys",
    role: "Java Developer",
    location: "Bengaluru",
    status: "Applied",
    date: "Today",
  },
  {
    company: "TCS",
    role: "Full Stack Developer",
    location: "Hyderabad",
    status: "Shortlisted",
    date: "Yesterday",
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    location: "Bengaluru",
    status: "Applied",
    date: "2 days ago",
  },
  {
    company: "Wipro",
    role: "Java Developer",
    location: "Hyderabad",
    status: "Rejected",
    date: "3 days ago",
  },
];

const stats = [
  {
    title: "Total Applications",
    value: "128",
    change: "+18 this week",
    icon: <FiBriefcase />,
  },
  {
    title: "Shortlisted",
    value: "14",
    change: "+4 this week",
    icon: <FiCheckCircle />,
  },
  {
    title: "Pending",
    value: "32",
    change: "8 today",
    icon: <FiClock />,
  },
  {
    title: "Interviews",
    value: "6",
    change: "+2 this week",
    icon: <FiTrendingUp />,
  },
];



function Dashboard() {
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

        <main className="lg:ml-64">

          {/* HEADER */}
          <Headers />

          {/* PAGE CONTENT */}
          <div className="px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:py-8 lg:pb-8">


            {/* =================================================
              AUTOMATION STATUS
          ================================================= */}

            <section
              className={`mb-6 rounded-2xl p-5 shadow-sm sm:p-6 ${Theme
                ? "bg-slate-900 text-white"
                : "bg-slate-900 text-white"
                }`}
            >

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>

                  <div className="mb-2 flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                    <span className="text-sm font-medium text-emerald-300">
                      Automation Active
                    </span>

                  </div>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    Your job search is running
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    18 suitable jobs found today
                  </p>

                </div>


                <button className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto">
                  View Activity
                </button>

              </div>

            </section>


            {/* =================================================
              STATS
          ================================================= */}

            <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">

              {stats.map((stat) => (

                <div
                  key={stat.title}
                  className={`rounded-2xl border p-4 shadow-sm sm:p-5 ${Theme
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white"
                    }`}
                >

                  <div className="mb-4 flex items-center justify-between">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${Theme
                        ? "bg-slate-800 text-slate-200"
                        : "bg-slate-100 text-slate-700"
                        }`}
                    >
                      {stat.icon}
                    </div>

                    <FiChevronRight
                      className={
                        Theme
                          ? "text-slate-600"
                          : "text-slate-300"
                      }
                    />

                  </div>

                  <p
                    className={`text-xs font-medium sm:text-sm ${Theme
                      ? "text-slate-400"
                      : "text-slate-500"
                      }`}
                  >
                    {stat.title}
                  </p>

                  <h3
                    className={`mt-1 text-2xl font-bold sm:text-3xl ${Theme
                      ? "text-white"
                      : "text-slate-900"
                      }`}
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-xs text-emerald-500">
                    {stat.change}
                  </p>

                </div>

              ))}

            </section>


            {/* =================================================
              BOTTOM GRID
          ================================================= */}

            <div className="grid gap-6 xl:grid-cols-3">


              {/* =================================================
                RECENT APPLICATIONS
            ================================================= */}

              <section
                className={`rounded-2xl border shadow-sm xl:col-span-2 ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >

                <div
                  className={`flex items-center justify-between border-b px-5 py-4 sm:px-6 ${Theme
                    ? "border-slate-700"
                    : "border-slate-100"
                    }`}
                >

                  <div>

                    <h3
                      className={`font-bold ${Theme
                        ? "text-white"
                        : "text-slate-900"
                        }`}
                    >
                      Recent Applications
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Your latest job applications
                    </p>

                  </div>

                  <button
                    className={`text-sm font-semibold ${Theme
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                      }`}
                  >
                    View all
                  </button>

                </div>


                <div
                  className={
                    Theme
                      ? "divide-y divide-slate-700"
                      : "divide-y divide-slate-100"
                  }
                >

                  {applications.map((job) => (

                    <div
                      key={`${job.company}-${job.role}`}
                      className="flex items-center gap-3 px-5 py-4 sm:px-6"
                    >

                      {/* Company Logo */}

                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${Theme
                          ? "bg-slate-800 text-slate-200"
                          : "bg-slate-100 text-slate-700"
                          }`}
                      >
                        {job.company.charAt(0)}
                      </div>


                      {/* Job Details */}

                      <div className="min-w-0 flex-1">

                        <h4
                          className={`truncate text-sm font-semibold ${Theme
                            ? "text-white"
                            : "text-slate-900"
                            }`}
                        >
                          {job.role}
                        </h4>

                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {job.company} • {job.location}
                        </p>

                      </div>


                      {/* Status */}

                      <div className="hidden text-right sm:block">

                        <StatusBadge status={job.status} />

                        <p className="mt-1 text-xs text-slate-400">
                          {job.date}
                        </p>

                      </div>


                      <FiChevronRight
                        className={`shrink-0 sm:hidden ${Theme
                          ? "text-slate-600"
                          : "text-slate-300"
                          }`}
                      />

                    </div>

                  ))}

                </div>

              </section>


              {/* =================================================
                JOB SEARCH
            ================================================= */}

              <section
                className={`rounded-2xl border shadow-sm ${Theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
                  }`}
              >

                <div
                  className={`border-b px-5 py-4 ${Theme
                    ? "border-slate-700"
                    : "border-slate-100"
                    }`}
                >

                  <h3
                    className={`font-bold ${Theme
                      ? "text-white"
                      : "text-slate-900"
                      }`}
                  >
                    Job Search
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Current search preferences
                  </p>

                </div>


                <div className="space-y-5 p-5">

                  <SearchItem
                    label="Role"
                    value="Java Developer"
                    Theme={Theme}
                  />

                  <SearchItem
                    label="Location"
                    value="Bengaluru, Hyderabad"
                    Theme={Theme}
                  />

                  <SearchItem
                    label="Experience"
                    value="Fresher / 0–1 years"
                    Theme={Theme}
                  />

                  <SearchItem
                    label="Work Mode"
                    value="Hybrid / On-site"
                    Theme={Theme}
                  />


                  <div
                    className={`border-t pt-5 ${Theme
                      ? "border-slate-700"
                      : "border-slate-100"
                      }`}
                  >

                    <div className="mb-2 flex justify-between text-sm">

                      <span className="text-slate-500">
                        Applications this week
                      </span>

                      <span
                        className={`font-semibold ${Theme
                          ? "text-white"
                          : "text-slate-900"
                          }`}
                      >
                        18 / 25
                      </span>

                    </div>


                    <div
                      className={`h-2 overflow-hidden rounded-full ${Theme
                        ? "bg-slate-800"
                        : "bg-slate-100"
                        }`}
                    >

                      <div className="h-full w-[72%] rounded-full bg-slate-900" />

                    </div>

                  </div>

                </div>

              </section>

            </div>


            {/* =================================================
              TODAY'S ACTIVITY
          ================================================= */}

            <section
              className={`mt-6 rounded-2xl border shadow-sm ${Theme
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-white"
                }`}
            >

              <div
                className={`border-b px-5 py-4 sm:px-6 ${Theme
                  ? "border-slate-700"
                  : "border-slate-100"
                  }`}
              >

                <h3
                  className={`font-bold ${Theme
                    ? "text-white"
                    : "text-slate-900"
                    }`}
                >
                  Today's Activity
                </h3>

              </div>


              <div
                className={`grid grid-cols-3 divide-x ${Theme
                  ? "divide-slate-700"
                  : "divide-slate-100"
                  }`}
              >

                <ActivityItem
                  value="18"
                  label="Jobs Found"
                  Theme={Theme}
                />

                <ActivityItem
                  value="12"
                  label="Applications"
                  Theme={Theme}
                />

                <ActivityItem
                  value="06"
                  label="Skipped"
                  Theme={Theme}
                />

              </div>

            </section>

          </div>

        </main>

        <MobileNavigation />

      </div>
    </>

  );
}


/* =====================================================
   STATUS BADGE
===================================================== */

function StatusBadge({ status }: any) {

  const styles: any = {
    Applied: "bg-blue-50 text-blue-600",
    Shortlisted: "bg-emerald-50 text-emerald-600",
    Rejected: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status] || "bg-slate-100 text-slate-600"
        }`}
    >
      {status}
    </span>
  );
}


/* =====================================================
   SEARCH ITEM
===================================================== */

function SearchItem({ label, value, Theme }: any) {

  return (
    <div>

      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p
        className={`mt-1 text-sm font-semibold ${Theme
          ? "text-slate-200"
          : "text-slate-800"
          }`}
      >
        {value}
      </p>

    </div>
  );
}


/* =====================================================
   ACTIVITY ITEM
===================================================== */

function ActivityItem({ value, label, Theme }: any) {

  return (
    <div className="px-2 py-5 text-center sm:px-4">

      <p
        className={`text-xl font-bold sm:text-2xl ${Theme
          ? "text-white"
          : "text-slate-900"
          }`}
      >
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
        {label}
      </p>

    </div>
  );
}
export default Dashboard;