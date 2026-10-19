
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
import { useEffect, useState } from "react";
import api from "../Components/ApiInsstance";
import { Toaster } from "sonner";
import Loader from "../Components/Loader";
import { Toast } from "../Components/Toast";

function Settings() {
    const Theme = useSelector((state: any) => state.counter.value);
    useSelector((state: any) => state.navigationPages.value);
    const updatenavigationPages = useDispatch();

    const [isloading, setisloading] = useState(false)

    const [Applicationupdates, setApplicationupdates] = useState<boolean>();
    const [Automaticapplications, setAutomaticapplications] = useState<boolean>();
    const [Automationreports, setAutomationreports] = useState<boolean>();
    const [EmailNotification, setEmailNotification] = useState<boolean>();
    const [Enableautomation, setEnableautomation] = useState<boolean>();
    const [Interviewalerts, setInterviewalerts] = useState<boolean>();
    const [Reviewbeforeapplying, setReviewbeforeapplying] = useState<boolean>();
    const [___, setApplicationSettingId] = useState<any>();
    const [JobPreferences, setJobPreferences] = useState<any>([])
    const [JobRole, setJobRole] = useState(JobPreferences?.PreferredJobRole)
    const [PreferredLocation, setPreferredLocation] = useState(JobPreferences?.PreferredLocation)
    const [YourExp, setYourExp] = useState("Fresher")
    const [WorkMode, setWrokMode] = useState("Hybrid / On-site");
    const [Salary, setSalary] = useState("3-LPA");
    const [applicationlimit, setapplicationlimit] = useState("");
    const [data, setdata] = useState<any>([])

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

    let a: any | string | null = JSON.parse(localStorage.getItem("User") ?? "")

    console.log(a.ApplicationuserId)


    useEffect(() => {


        const GetApplicationSettings = async () => {


            try {
                setisloading(true)
                const response = await api.get("/AppSettings/get", {
                    params: {
                        "userid": String(a.ApplicationuserId)
                    }
                })
                setdata(response?.data.Jobperfecncedata)
                setisloading(true)
                setApplicationSettingId(response?.data?.Settingsdata?.ApplicationSettingId)
                setApplicationupdates(response?.data?.Settingsdata?.Applicationupdates)
                setAutomaticapplications(response?.data?.Settingsdata?.Automaticapplications)
                setAutomationreports(response?.data?.Settingsdata?.Automationreports)
                setEmailNotification(response?.data?.Settingsdata?.EmailNotification)
                setEnableautomation(response?.data?.Settingsdata?.Enableautomation)
                setInterviewalerts(response?.data?.Settingsdata?.Interviewalerts)
                setReviewbeforeapplying(response?.data?.Settingsdata?.Reviewbeforeapplying)
                setJobPreferences(response?.data?.Jobperfecncedata)
            } catch (error: any) {
                Toast({
                    messages: error?.response.data.ErrorMessage,
                    code: error.status,
                    type: "Error",
                });

                return setisloading(false)
            }
            finally {
                setisloading(false)
            }
        }

        GetApplicationSettings()
    }, [a.ApplicationuserId])




    const handeltoggle = (ref: any) => {
        console.log(ref)
        switch (ref) {
            case 4:
                setEmailNotification(prev => !prev)
                break;

            case 1:
                // console.log("Enable automation")
                setEnableautomation(prev => !prev)
                break;

            case 2:
                // console.log("Enable automation")
                setAutomaticapplications(prev => !prev)
                break;

            case 3:
                // console.log("Enable automation")
                setReviewbeforeapplying(prev => !prev)
                break;

            case 5:
                // console.log("Enable automation")
                setApplicationupdates(prev => !prev)
                break;
            case 6:
                // console.log("Enable automation")
                setInterviewalerts(prev => !prev)
                break;
            case 7:
                // console.log("Enable automation")
                setAutomationreports(prev => !prev)
                break;

            default:


                setInterviewalerts(prev => !prev)
                break;
        }
    }

    // HandelSavePerefence

    const HandelSavePerefence = async () => {
        let a: String | null | any = JSON.parse(localStorage.getItem("User") || "")

        const appsetting = {
            Settingsdata: {
                ApplicationSettingId: a.ApplicationuserId,
                Applicationupdates,
                Automaticapplications,
                Automationreports,
                EmailNotification,
                Enableautomation,
                Interviewalerts,
                Reviewbeforeapplying,
                userId: a.ApplicationuserId
            },
            Jobperfecncedata: {
                DailyApplicationLimit: applicationlimit,
                ExpectedSalary: Salary,
                ExperienceLevel: YourExp,
                JobSearchPreferencesid: data.JobSearchPreferencesid,
                PreferredJobRole: JobRole,
                PreferredLocation: PreferredLocation,
                WorkMode: WorkMode,
                userApplicationId: a.ApplicationuserId
            }
        };
        console.log(appsetting)
        try {
            const response = await api.put(
                "/AppSettings/Update/Settings",
                appsetting
            );

            console.log("Response:", response.data);
            return Toast(
                { messages: response?.data, code: response?.status, type: "sucess" }
            )
        } catch (error: any) {
            alert(error?.response?.data?.message);
            return Toast(
                { messages: error?.response?.data, code: error ?.response?.status, type: "Error" }
            )
        }
    }
    const WORK_MODE = ["Hybrid / On-site", "On-site", "Hybrid", "Remote", "Any"]

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

    const Toggle = ({ label, description, enabled, ref }: any) => (

        <div className="flex items-center justify-between gap-4 py-4"
            onClick={() => handeltoggle(ref)}>
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

                                            // value={JobRole || JobPreferences?.PreferredJobRole}
                                            value={JobRole ?? JobPreferences?.PreferredJobRole ?? ""}
                                            className={inputClass}
                                            onChange={(e) => setJobRole(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClass}>Preferred Locations</label>
                                        <div className="relative">
                                            <FiMapPin className={`absolute left-3 top-1/2 -translate-y-1/2 ${muted}`} />
                                            <input

                                                value={PreferredLocation ?? JobPreferences?.PreferredLocation ?? ""}
                                                className={`${inputClass} pl-9`}
                                                onChange={(e) => setPreferredLocation(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Experience Level </label>
                                        <select className={inputClass} defaultValue="Fresher" onChange={(e) => setYourExp(e.target
                                            .value
                                        )}>
                                            {
                                                ["Fresher", "0-1", "1-3", "3-5"].map((yer, idx) => (
                                                    <option value={yer} key={idx}>{yer} {yer == 'Fresher' ? "" : "Year"}</option>
                                                ))
                                            }

                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Work Mode -</label>
                                        <select className={inputClass} defaultValue="Hybrid / On-site" onChange={(e) => setWrokMode(e.target.value)}>
                                            {WORK_MODE.map((mode, idx) => (

                                                <option value={mode} key={idx} >{mode}</option>
                                            ))}

                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Expected Salary</label>
                                        <select className={inputClass} defaultValue="3 LPA" onChange={(e) => setSalary(e.target.value)}>

                                            {[
                                                "3 LPA",
                                                "4 LPA",
                                                "5 LPA",
                                                "6 LPA",
                                                "7 LPA",
                                                "8 LPA",
                                                "9 LPA",
                                                "10 LPA",
                                                "12 LPA",
                                                "15 LPA",
                                                "18 LPA",
                                                "20 LPA",
                                                "25 LPA",
                                                "30 LPA",
                                                "40 LPA",
                                                "50 LPA",
                                                "50+ LPA",
                                            ].map((salary, idx) => (
                                                <option value={salary} key={idx}>
                                                    {salary}
                                                </option>
                                            ))}

                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Daily Application Limit</label>
                                        <select className={inputClass} defaultValue="10" onClick={(e: any) => setapplicationlimit(e.target.value)}>
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
                                        enabled={Enableautomation}
                                        ref={1}

                                    />

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Automatic applications"
                                            description="Enable applications without individual review when permitted."
                                            enabled={Automaticapplications}
                                            ref={2}
                                        />
                                    </div>

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Review before applying"
                                            description="Review job details before submitting an application."
                                            enabled={Reviewbeforeapplying}
                                            ref={3}
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
                                        enabled={EmailNotification}
                                        ref={4}
                                    />

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Application updates"
                                            description="Stay informed about application status changes."
                                            enabled={Applicationupdates}
                                            ref={5}


                                        />
                                    </div>

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Interview alerts"
                                            description="Receive interview-related reminders."
                                            enabled={Interviewalerts

                                            }
                                            ref={6}
                                        />
                                    </div>

                                    <div className="border-t border-slate-200/20">
                                        <Toggle
                                            label="Automation reports"
                                            description="View summaries of completed automation runs."
                                            ref={7}
                                            enabled={Automationreports}
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
                                                {JobPreferences?.PreferredJobRole || ""}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiMapPin className="text-indigo-500" size={19} />
                                        <div>
                                            <p className={`text-xs ${muted}`}>Locations - {JobPreferences?.PreferredLocation?.split(",").length || 0}</p>
                                            <p className={`mt-1 text-sm font-semibold ${heading}`}>
                                                {JobPreferences?.PreferredLocation || ""}
                                                {/* {JobPreferences?.PreferredLocation}
                                                Bengaluru, Hyderabad */}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiClock className="text-indigo-500" size={19} />
                                        <div>
                                            <p className={`text-xs ${muted}`}>Daily Limit</p>
                                            <p className={`mt-1 text-sm font-semibold ${heading}`}>
                                                {JobPreferences?.DailyApplicationLimit || 0}
                                                applications
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
                            onClick={() => HandelSavePerefence()}
                        >
                            <FiSave size={17} />
                            Save Settings
                        </button>
                    </div>
                    <Loader
                        title="Loading Settings"
                        subtitle="Please wait while we retrieve your preferences..."
                        isloading={isloading}
                    />

                    <Toaster

                        theme="system"
                        richColors
                        closeButton
                        expand={false}
                        duration={3000}
                        visibleToasts={4}
                        gap={12}
                        offset="24px"
                        mobileOffset="16px"
                        dir="ltr"
                        swipeDirections={["right", "left"]}
                        toastOptions={{
                            className: "jobpilot-toast",
                            duration: 3000,
                        }}
                        icons={{
                            success: "✅",
                            error: "❌",
                            warning: "⚠️",
                            info: "ℹ️",
                        }}

                    />

                </div>
            </main>

            <MobileNavigation />
        </div>
    );
}

export default Settings;
