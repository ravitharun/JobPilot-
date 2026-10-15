
import {
    FiUser,
    FiBriefcase,
    FiBell,
    FiShield,
    FiMoon,
    FiSun,
    FiMapPin,
    FiSave,
    FiRefreshCw,
    FiMail,
    FiClock,
    FiLock,
    FiTrash2,
    FiChevronRight,
} from "react-icons/fi";

import MainSidebar from "../Components/MainSidebar";
import Headers from "../Components/Headers";
import MobileNavigation from "../Components/MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateNaviagtion } from "../Store/Navigation";

function Settings() {
    const Theme = useSelector((state: any) => state.counter.value);
    useSelector((state: any) => state.navigationPages.value);
    const updatenavigationPages = useDispatch();
    const card = `rounded-2xl border shadow-sm ${Theme
        ? "border-slate-700 bg-slate-900"
        : "border-slate-200 bg-white"
        }`;

    const heading = Theme ? "text-white" : "text-slate-900";
    const muted = Theme ? "text-slate-400" : "text-slate-500";

    const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none ${Theme
        ? "border-slate-700 bg-slate-950 text-white"
        : "border-slate-200 bg-white text-slate-800"
        }`;

    const labelClass = `mb-2 block text-sm font-medium ${muted}`;

    const SectionHeader = ({ icon: Icon, title, description }: any) => (
        <div className="flex items-start gap-3 border-b border-slate-200/20 px-5 py-5 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Icon size={20} />
            </div>
            <div>
                <h3 className={`font-bold ${heading}`}>{title}</h3>
                <p className={`mt-1 text-sm ${muted}`}>{description}</p>
            </div>
        </div>
    );

    const Toggle = ({ label, description, enabled = false }: any) => (
        <div className="flex items-center justify-between gap-4 py-4">
            <div>
                <p className={`text-sm font-semibold ${heading}`}>{label}</p>
                <p className={`mt-1 text-xs leading-5 ${muted}`}>{description}</p>
            </div>

            <span
                className={`relative h-6 w-11 shrink-0 rounded-full ${enabled
                    ? "bg-indigo-600"
                    : Theme
                        ? "bg-slate-700"
                        : "bg-slate-300"
                    }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm ${enabled ? "left-[22px]" : "left-0.5"
                        }`}
                />
            </span>
        </div>
    );
    
    const AccountItem = ({ icon: Icon, title, description, route }: any) => (

        <Link to={route} onClick={() => updatenavigationPages(UpdateNaviagtion("Profile"))}>
            <div
                className={`flex items-center gap-3 rounded-xl p-3 ${Theme ? "hover:bg-slate-800" : "hover:bg-slate-50"
                    }`}
            >
                <Icon size={19} className={muted} />
                <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium ${heading}`}>{title}</p>
                    <p className={`mt-1 text-xs ${muted}`}>{description}</p>
                </div>
                <FiChevronRight className={muted} />
            </div></Link>
    );

    return (
        <div
            className={`min-h-screen ${Theme
                ? "bg-slate-950 text-slate-100"
                : "bg-slate-50 text-slate-800"
                }`}
        >
            <MainSidebar />

            <main className="lg:ml-64">
                <Headers />

                <div className="px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:py-8 lg:pb-8">

                    {/* PAGE HEADER */}
                    <div className="mb-7">
                        <p className="mb-2 text-sm font-medium text-indigo-500">
                            ACCOUNT / SETTINGS
                        </p>

                        <h1 className={`text-2xl font-bold sm:text-3xl ${heading}`}>
                            Settings
                        </h1>

                        <p className={`mt-2 text-sm ${muted}`}>
                            Customize your JobPilot experience and preferences.
                        </p>
                    </div>

                    <div className="grid items-start gap-6 xl:grid-cols-3">

                        {/* LEFT COLUMN */}
                        <div className="space-y-6 xl:col-span-2">

                            {/* JOB PREFERENCES */}
                            <section className={card}>
                                <SectionHeader
                                    icon={FiBriefcase}
                                    title="Job Search Preferences"
                                    description="Choose the opportunities that match your career goals."
                                />

                                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                                    <div>
                                        <label className={labelClass}>Preferred Job Role</label>
                                        <input
                                            readOnly
                                            value="Java Developer"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClass}>Preferred Locations</label>
                                        <div className="relative">
                                            <FiMapPin className={`absolute left-3 top-1/2 -translate-y-1/2 ${muted}`} />
                                            <input
                                                readOnly
                                                value="Bengaluru, Hyderabad"
                                                className={`${inputClass} pl-9`}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Experience Level</label>
                                        <select className={inputClass} defaultValue="Fresher">
                                            <option>Fresher</option>
                                            <option>0–1 years</option>
                                            <option>1–3 years</option>
                                            <option>3–5 years</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Work Mode</label>
                                        <select className={inputClass} defaultValue="Hybrid / On-site">
                                            <option>Hybrid / On-site</option>
                                            <option>On-site</option>
                                            <option>Hybrid</option>
                                            <option>Remote</option>
                                            <option>Any</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Expected Salary</label>
                                        <select className={inputClass} defaultValue="4 LPA">
                                            <option>Any salary</option>
                                            <option>3 LPA</option>
                                            <option>4 LPA</option>
                                            <option>5 LPA</option>
                                            <option>6 LPA</option>
                                            <option>8 LPA</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Daily Application Limit</label>
                                        <select className={inputClass} defaultValue="10">
                                            <option value="5">5 applications</option>
                                            <option value="10">10 applications</option>
                                            <option value="15">15 applications</option>
                                            <option value="20">20 applications</option>
                                            <option value="25">25 applications</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* AUTOMATION */}
                            <section className={card}>
                                <SectionHeader
                                    icon={FiRefreshCw}
                                    title="Job Automation"
                                    description="Configure how JobPilot handles your job search."
                                />

                                <div className="px-5 sm:px-6">
                                    <Toggle
                                        label="Enable automation"
                                        description="Allow the configured job-search workflow to run."
                                    />

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Automatic applications"
                                            description="Enable applications without individual review when permitted."
                                        />
                                    </div>

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Review before applying"
                                            description="Review job details before submitting an application."
                                            enabled
                                        />
                                    </div>

                                    <div className={`mb-5 rounded-xl p-4 text-xs leading-5 ${Theme
                                        ? "bg-slate-800 text-slate-300"
                                        : "bg-slate-50 text-slate-600"
                                        }`}>
                                        Review your job and application details carefully before submitting.
                                    </div>
                                </div>
                            </section>

                            {/* NOTIFICATIONS */}
                            <section className={card}>
                                <SectionHeader
                                    icon={FiBell}
                                    title="Notifications"
                                    description="Choose which updates you'd like to receive."
                                />

                                <div className="px-5 sm:px-6">
                                    <Toggle
                                        label="Email notifications"
                                        description="Receive important account updates by email."
                                        enabled
                                    />

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Application updates"
                                            description="Stay informed about application status changes."
                                            enabled
                                        />
                                    </div>

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Interview alerts"
                                            description="Receive interview-related reminders."
                                            enabled
                                        />
                                    </div>

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Automation reports"
                                            description="View summaries of completed automation runs."
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-6">

                            {/* APPEARANCE */}
                            <section className={card}>
                                <SectionHeader
                                    icon={Theme ? FiMoon : FiSun}
                                    title="Appearance"
                                    description="Application theme."
                                />

                                <div className="p-5">
                                    <div className={`flex items-center gap-4 rounded-xl p-4 ${Theme ? "bg-slate-800" : "bg-slate-50"
                                        }`}>
                                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${Theme
                                            ? "bg-indigo-500/20 text-indigo-300"
                                            : "bg-amber-100 text-amber-600"
                                            }`}>
                                            {Theme ? <FiMoon size={21} /> : <FiSun size={21} />}
                                        </div>

                                        <div>
                                            <p className={`text-sm font-semibold ${heading}`}>
                                                {Theme ? "Dark Mode" : "Light Mode"}
                                            </p>
                                            <p className={`mt-1 text-xs ${muted}`}>
                                                Current theme
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ACCOUNT */}
                            <section className={card}>
                                <SectionHeader
                                    icon={FiUser}
                                    title="Account"
                                    description="Manage account details and security."
                                />

                                <div className="space-y-1 p-4">
                                    <AccountItem
                                        icon={FiUser}
                                        title="Personal Information"
                                        description="Manage your profile details"
                                        route="/Profile"
                                    />

                                    <AccountItem
                                        icon={FiLock}
                                        title="Password & Security"
                                        description="Protect your account"
                                    />

                                    <AccountItem
                                        icon={FiMail}
                                        title="Email Preferences"
                                        description="Manage email settings"
                                    />

                                    <AccountItem
                                        icon={FiShield}
                                        title="Privacy"
                                        description="Account privacy preferences"
                                    />
                                </div>
                            </section>

                            {/* QUICK SUMMARY */}
                            <section className={`${card} p-5`}>
                                <h3 className={`font-bold ${heading}`}>Current Preferences</h3>

                                <div className="mt-5 space-y-5">
                                    <div className="flex items-center gap-3">
                                        <FiBriefcase className="text-indigo-500" size={19} />
                                        <div>
                                            <p className={`text-xs ${muted}`}>Target Role</p>
                                            <p className={`mt-1 text-sm font-semibold ${heading}`}>
                                                Java Developer
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiMapPin className="text-indigo-500" size={19} />
                                        <div>
                                            <p className={`text-xs ${muted}`}>Locations</p>
                                            <p className={`mt-1 text-sm font-semibold ${heading}`}>
                                                Bengaluru, Hyderabad
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiClock className="text-indigo-500" size={19} />
                                        <div>
                                            <p className={`text-xs ${muted}`}>Daily Limit</p>
                                            <p className={`mt-1 text-sm font-semibold ${heading}`}>
                                                10 applications
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* DANGER ZONE */}
                            <section className={`rounded-2xl border p-5 ${Theme
                                ? "border-red-900/70 bg-slate-900"
                                : "border-red-200 bg-white"
                                }`}>
                                <div className="flex items-center gap-2 text-red-500">
                                    <FiTrash2 size={19} />
                                    <h3 className="font-bold">Danger Zone</h3>
                                </div>

                                <p className={`mt-3 text-xs leading-5 ${muted}`}>
                                    Account deletion permanently removes your account and related data.
                                </p>

                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-xl border border-red-300 px-4 py-3 text-sm font-semibold text-red-500"
                                >
                                    Delete Account
                                </button>
                            </section>
                        </div>
                    </div>

                    {/* SAVE BUTTON */}
                    <div className={`mt-6 flex flex-col justify-between gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center ${Theme
                        ? "border-slate-700 bg-slate-900"
                        : "border-slate-200 bg-white"
                        }`}>
                        <div>
                            <p className={`font-semibold ${heading}`}>Settings Preferences</p>
                            <p className={`mt-1 text-sm ${muted}`}>
                                Review your preferences before saving.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                        >
                            <FiSave size={17} />
                            Save Settings
                        </button>
                    </div>

                </div>
            </main>

            <MobileNavigation />
        </div>
    );
}

export default Settings;
