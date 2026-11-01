


import { useState } from 'react';
import {
    FiSearch,
    FiFilter,
    FiBriefcase,
    FiCalendar,
    FiClock,
    FiMapPin,
    FiCheckCircle,
    FiXCircle,
    FiExternalLink,
    FiTrendingUp,
} from 'react-icons/fi';

import Headers from '../Components/Headers';
import MainSidebar from '../Components/MainSidebar';
import { useSelector } from 'react-redux';
import MobileNavigation from '../Components/MobileNav';
import { CheckReload } from '../Components/Reload';
import type { IconType } from 'react-icons';

const applications = [
    {
        id: 1,
        role: 'Java Full Stack Developer',
        company: 'Infosys',
        location: 'Bengaluru',
        date: 'Oct 29, 2026',
        status: 'Applied',
    },
    {
        id: 2,
        role: 'Associate Software Engineer',
        company: 'Accenture',
        location: 'Hyderabad',
        date: 'Oct 28, 2026',
        status: 'Interview',
    },
    {
        id: 3,
        role: 'React Developer',
        company: 'TCS',
        location: 'Bengaluru',
        date: 'Oct 27, 2026',
        status: 'Pending',
    },
    {
        id: 4,
        role: 'Software Developer',
        company: 'Wipro',
        location: 'Pune',
        date: 'Oct 26, 2026',
        status: 'Rejected',
    },
    {
        id: 5,
        role: 'Backend Developer',
        company: 'Cognizant',
        location: 'Chennai',
        date: 'Oct 25, 2026',
        status: 'Applied',
    },
];

const statusStyles = {
    Applied: 'bg-emerald-50 text-emerald-700',
    Interview: 'bg-violet-50 text-violet-700',
    Pending: 'bg-amber-50 text-amber-700',
    Rejected: 'bg-rose-50 text-rose-700',
};
type ApplicationStatus = "Applied" | "Interview" | "Pending" | "Rejected";

const statusIcons: Record<ApplicationStatus, IconType> = {
    Applied: FiCheckCircle,
    Interview: FiCalendar,
    Pending: FiClock,
    Rejected: FiXCircle,
};
function Application() {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('All');
    CheckReload()
    const filteredApplications: any = applications.filter((app) => {
        const matchesSearch = `${app.role} ${app.company} ${app.location}`
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus = status === 'All' || app.status === status;

        return matchesSearch && matchesStatus;
    });

    const stats = [
        {
            label: 'Total Applications',
            value: applications.length,
            icon: FiBriefcase,
            color: 'bg-blue-50 text-blue-600',
        },
        {
            label: 'Interviews',
            value: applications.filter((a) => a.status === 'Interview').length,
            icon: FiCalendar,
            color: 'bg-violet-50 text-violet-600',
        },
        {
            label: 'Pending',
            value: applications.filter((a) => a.status === 'Pending').length,
            icon: FiClock,
            color: 'bg-amber-50 text-amber-600',
        },
        {
            label: 'Rejected',
            value: applications.filter((a) => a.status === 'Rejected').length,
            icon: FiXCircle,
            color: 'bg-rose-50 text-rose-600',
        },
    ];

    const viewApplication = (app: any) => {
        window.alert(
            `${app.role} at ${app.company}\nStatus: ${app.status}`
        );
    };
    const Theme = useSelector((state: any) => state.counter.value);


    return (

        <>
            <main
                className={`min-h-screen ${Theme
                    ? "bg-slate-950 text-slate-100"
                    : "bg-slate-50 text-slate-800"
                    }`}
            >

                <MainSidebar />
                <MobileNavigation />

                <main className="lg:ml-64">

                    {/* HEADER */}
                    <Headers />

                    {/* PAGE CONTENT */}
                    <div
                        className={`px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:py-8 lg:pb-8 ${Theme
                            ? "bg-slate-950 text-slate-100"
                            : "bg-slate-50 text-slate-800"
                            }`}
                    >
                        <main className="mx-auto w-full min-w-0 max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">

                            {/* Header */}
                            <header className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
                                <div className="min-w-0">
                                    <p className="mb-2 text-xs font-bold tracking-[0.18em] text-violet-600">
                                        JOBPILOT / TRACKER
                                    </p>

                                    <h1 className={`text-2xl font-bold tracking-tight sm:text-3xl ${Theme ? "text-slate-100" : "text-slate-900"
                                        }`}>
                                        My Applications
                                    </h1>

                                    <p className={`mt-2 text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                        }`}>
                                        Track your job search journey in one place.
                                    </p>
                                </div>

                                <div className={`flex w-fit max-w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium shadow-sm sm:px-4 sm:py-3 sm:text-sm ${Theme
                                    ? "border-slate-700 bg-slate-900 text-slate-300"
                                    : "border-slate-200 bg-white text-slate-600"
                                    }`}>
                                    <FiTrendingUp className="shrink-0 text-violet-500" size={18} />
                                    <span>{applications.length} applications tracked</span>
                                </div>
                            </header>

                            {/* Statistics */}
                            <section className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 lg:grid-cols-4">
                                {stats.map((stat) => {
                                    const Icon = stat.icon;

                                    return (
                                        <div
                                            key={stat.label}
                                            className={`flex min-w-0 items-center gap-3 rounded-xl border p-3 shadow-sm transition hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-5 ${Theme
                                                ? "border-slate-800 bg-slate-900 hover:bg-slate-800"
                                                : "border-slate-200/80 bg-white hover:bg-slate-50"
                                                }`}
                                        >
                                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${stat.color}`}>
                                                <Icon size={21} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className={`text-xs leading-4 sm:text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                                    }`}>
                                                    {stat.label}
                                                </p>

                                                <h2 className={`mt-1 text-xl font-bold sm:text-2xl ${Theme ? "text-slate-100" : "text-slate-900"
                                                    }`}>
                                                    {String(stat.value).padStart(2, "0")}
                                                </h2>
                                            </div>
                                        </div>
                                    );
                                })}
                            </section>

                            {/* Application History */}
                            <section className={`min-w-0 overflow-hidden rounded-2xl border shadow-sm ${Theme
                                ? "border-slate-800 bg-slate-900"
                                : "border-slate-200 bg-white"
                                }`}>

                                {/* Section Header */}
                                <div className={`flex flex-col justify-between gap-3 border-b px-4 py-5 sm:flex-row sm:items-center sm:px-7 sm:py-6 ${Theme ? "border-slate-800" : "border-slate-100"
                                    }`}>
                                    <div>
                                        <h2 className={`text-lg font-bold ${Theme ? "text-slate-100" : "text-slate-900"
                                            }`}>
                                            Application History
                                        </h2>

                                        <p className={`mt-1 text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                            }`}>
                                            Manage your applications and track their progress.
                                        </p>
                                    </div>

                                    <span className="w-fit rounded-lg bg-violet-500/10 px-3 py-2 text-xs font-semibold text-violet-500">
                                        {filteredApplications.length} Records
                                    </span>
                                </div>

                                {/* Search and Filter */}
                                <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:px-7 sm:py-5">
                                    <div className={`flex h-11 min-w-0 flex-1 items-center gap-3 rounded-xl border px-3 transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500/20 sm:px-4 ${Theme ? "border-slate-700 bg-slate-950" : "border-slate-200 bg-white"
                                        }`}>
                                        <FiSearch className="shrink-0 text-slate-400" size={18} />

                                        <input
                                            type="text"
                                            placeholder="Search role, company or location..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className={`w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-xs sm:placeholder:text-sm ${Theme
                                                ? "text-slate-100 placeholder:text-slate-500"
                                                : "text-slate-800 placeholder:text-slate-400"
                                                }`}
                                        />
                                    </div>

                                    <div className={`flex h-11 w-full shrink-0 items-center gap-2 rounded-xl border px-3 sm:w-auto ${Theme ? "border-slate-700 bg-slate-950" : "border-slate-200 bg-white"
                                        }`}>
                                        <FiFilter className="shrink-0 text-slate-400" size={17} />

                                        <select
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            className={`min-w-0 flex-1 cursor-pointer bg-transparent text-sm outline-none sm:min-w-28 ${Theme ? "text-slate-200" : "text-slate-600"
                                                }`}
                                        >
                                            <option value="All">All Status</option>
                                            <option value="Applied">Applied</option>
                                            <option value="Interview">Interview</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Mobile Application Cards */}
                                <div className={`divide-y md:hidden ${Theme ? "divide-slate-800" : "divide-slate-100"
                                    }`}>
                                    {filteredApplications.map((app: any) => {
                                        const StatusIcon: any = statusIcons[app.status];

                                        return (
                                            <article key={app.id} className="p-4">
                                                <div className="flex min-w-0 items-start gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-lg font-bold text-violet-500">
                                                        {app.company.charAt(0)}
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <h3 className={`break-words text-sm font-semibold leading-5 ${Theme ? "text-slate-100" : "text-slate-800"
                                                            }`}>
                                                            {app.role}
                                                        </h3>

                                                        <p className={`mt-1 text-xs ${Theme ? "text-slate-400" : "text-slate-500"
                                                            }`}>
                                                            {app.company}
                                                        </p>

                                                        <div className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs ${Theme ? "text-slate-400" : "text-slate-500"
                                                            }`}>
                                                            <span className="flex items-center gap-1.5">
                                                                <FiMapPin size={14} />
                                                                {app.location}
                                                            </span>

                                                            <span className="flex items-center gap-1.5">
                                                                <FiCalendar size={14} />
                                                                {app.date}
                                                            </span>
                                                        </div>

                                                        <div className="mt-3 flex items-center justify-between gap-3">
                                                            <span className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${statusStyles[app.status]}`}>
                                                                <StatusIcon size={13} />
                                                                {app.status}
                                                            </span>

                                                            <button
                                                                type="button"
                                                                title="View application"
                                                                onClick={() => viewApplication(app)}
                                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition ${Theme
                                                                    ? "border-slate-700 text-slate-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
                                                                    : "border-slate-200 text-slate-500 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                                                                    }`}
                                                            >
                                                                <FiExternalLink size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        );
                                    })}

                                    {filteredApplications.length === 0 && (
                                        <div className={`px-4 py-10 text-center text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                            }`}>
                                            No applications found. Try changing your search or filter.
                                        </div>
                                    )}
                                </div>

                                {/* Tablet and Desktop Table */}
                                <div className="hidden overflow-x-auto md:block">
                                    <table className="w-full min-w-[850px] text-left">
                                        <thead className={Theme ? "bg-slate-950" : "bg-slate-50"}>
                                            <tr className={`text-[11px] font-semibold uppercase tracking-wider ${Theme ? "text-slate-400" : "text-slate-400"
                                                }`}>
                                                <th className="px-7 py-4">Job Role / Company</th>
                                                <th className="px-5 py-4">Location</th>
                                                <th className="px-5 py-4">Applied Date</th>
                                                <th className="px-5 py-4">Status</th>
                                                <th className="px-7 py-4 text-right">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody className={`divide-y ${Theme ? "divide-slate-800" : "divide-slate-100"
                                            }`}>
                                            {filteredApplications.map((app: any) => {
                                                const StatusIcon = statusIcons[app.status];

                                                return (
                                                    <tr
                                                        key={app.id}
                                                        className={`transition ${Theme ? "hover:bg-slate-800/70" : "hover:bg-slate-50/80"
                                                            }`}
                                                    >
                                                        <td className="px-7 py-5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-lg font-bold text-violet-500">
                                                                    {app.company.charAt(0)}
                                                                </div>

                                                                <div>
                                                                    <p className={`text-sm font-semibold ${Theme ? "text-slate-100" : "text-slate-800"
                                                                        }`}>
                                                                        {app.role}
                                                                    </p>
                                                                    <p className={`mt-1 text-xs ${Theme ? "text-slate-400" : "text-slate-500"
                                                                        }`}>
                                                                        {app.company}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className={`px-5 py-5 text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                                            }`}>
                                                            <span className="flex items-center gap-2">
                                                                <FiMapPin size={15} />
                                                                {app.location}
                                                            </span>
                                                        </td>

                                                        <td className={`px-5 py-5 text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                                            }`}>
                                                            <span className="flex items-center gap-2">
                                                                <FiCalendar size={15} />
                                                                {app.date}
                                                            </span>
                                                        </td>

                                                        <td className="px-5 py-5">
                                                            <span className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${statusStyles[app.status]}`}>
                                                                <StatusIcon size={14} />
                                                                {app.status}
                                                            </span>
                                                        </td>

                                                        <td className="px-7 py-5 text-right">
                                                            <button
                                                                type="button"
                                                                title="View application"
                                                                onClick={() => viewApplication(app)}
                                                                className={`rounded-lg border p-2.5 transition ${Theme
                                                                    ? "border-slate-700 text-slate-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
                                                                    : "border-slate-200 text-slate-500 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                                                                    }`}
                                                            >
                                                                <FiExternalLink size={16} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}

                                            {filteredApplications.length === 0 && (
                                                <tr>
                                                    <td
                                                        colSpan={5}
                                                        className={`px-6 py-14 text-center text-sm ${Theme ? "text-slate-400" : "text-slate-500"
                                                            }`}
                                                    >
                                                        No applications found. Try changing your search or filter.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Footer */}
                                <footer className={`flex flex-col justify-between gap-3 border-t px-4 py-4 text-xs sm:flex-row sm:items-center sm:px-7 ${Theme
                                    ? "border-slate-800 text-slate-400"
                                    : "border-slate-100 text-slate-500"
                                    }`}>
                                    <span>
                                        Showing {filteredApplications.length} of {applications.length} applications
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FiCheckCircle className="text-emerald-500" size={15} />
                                        Application history
                                    </span>
                                </footer>
                            </section>
                        </main>
                    </div>
                </main>
            </main >
            {/* </div > */}




        </>
    );
}

export default Application;