
import  { useState } from "react";
import {
    FiUser,
    FiMail,
    
    FiMapPin,
    FiBriefcase,
    FiFileText,
    FiEdit2,
    FiSave,
    FiX,
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiShield,
    FiCheckCircle,
    FiUploadCloud,
} from "react-icons/fi";

import MainSidebar from "../Components/MainSidebar";
import Headers from "../Components/Headers";
import MobileNavigation from "../Components/MobileNav";
import { useSelector } from "react-redux";

function Profile() {
    const Theme = useSelector((state: any) => state.counter.value);
    const [editing, setEditing] = useState(false);

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        role: "Java Full Stack Developer",
        experience: "Fresher",
        github: "",
        linkedin: "",
        portfolio: "",
        about: "",
    });

    const [resume, setResume] = useState<any>(null);

    const updateProfile = (e: any) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const saveProfile = (e: any) => {
        e.preventDefault();
        // Connect this handler to your Spring Boot profile API.
        setEditing(false);
    };

    const card = `rounded-2xl border shadow-sm ${Theme
        ? "border-slate-700 bg-slate-900"
        : "border-slate-200 bg-white"
        }`;

    const heading = Theme ? "text-white" : "text-slate-900";
    const muted = Theme ? "text-slate-400" : "text-slate-500";

    const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${Theme
        ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-600"
        : "border-slate-200 bg-white text-slate-800 placeholder:text-slate-400"
        }`;

    const labelClass = `mb-2 block text-sm font-medium ${muted}`;

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
                    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="mb-2 text-sm font-medium text-indigo-500">
                                ACCOUNT / PROFILE
                            </p>

                            <h1 className={`text-2xl font-bold sm:text-3xl ${heading}`}>
                                My Profile
                            </h1>

                            <p className={`mt-2 text-sm ${muted}`}>
                                Manage your personal and professional information.
                            </p>
                        </div>

                        {!editing ? (
                            <button
                                type="button"
                                onClick={() => setEditing(true)}
                                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                <FiEdit2 />
                                Edit Profile
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditing(false)}
                                    className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${Theme
                                        ? "border-slate-700 hover:bg-slate-800"
                                        : "border-slate-200 hover:bg-slate-100"
                                        }`}
                                >
                                    <FiX />
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    form="profile-form"
                                    className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                                >
                                    <FiSave />
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>

                    <form id="profile-form" onSubmit={saveProfile}>
                        <div className="grid items-start gap-6 xl:grid-cols-3">
                            {/* LEFT PROFILE CARD */}
                            <div className="space-y-6">
                                <section className={`${card} overflow-hidden`}>
                                    <div className="h-24 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-500" />

                                    <div className="px-5 pb-6">
                                        <div className="-mt-12 mb-4 flex items-end justify-between">
                                            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-indigo-700 shadow-sm">
                                                <FiUser size={40} />
                                            </div>

                                            <span className="mb-1 flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                                                <FiCheckCircle />
                                                Account
                                            </span>
                                        </div>

                                        <h2 className={`text-xl font-bold ${heading}`}>
                                            {profile.name || "Your Name"}
                                        </h2>

                                        <p className={`mt-1 text-sm ${muted}`}>
                                            {profile.role}
                                        </p>

                                        <div className="mt-5 space-y-3 border-t border-slate-200/20 pt-5">
                                            <div className={`flex items-center gap-3 text-sm ${muted}`}>
                                                <FiMail className="shrink-0" />
                                                <span className="break-all">
                                                    {profile.email || "Add your email"}
                                                </span>
                                            </div>

                                            <div className={`flex items-center gap-3 text-sm ${muted}`}>
                                                <FiMapPin className="shrink-0" />
                                                <span>{profile.location || "Add your location"}</span>
                                            </div>

                                            <div className={`flex items-center gap-3 text-sm ${muted}`}>
                                                <FiBriefcase className="shrink-0" />
                                                <span>{profile.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* ACCOUNT STATUS */}
                                <section className={`${card} p-5`}>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                            <FiShield size={20} />
                                        </div>

                                        <div>
                                            <h3 className={`font-bold ${heading}`}>
                                                Account Security
                                            </h3>
                                            <p className={`mt-1 text-xs ${muted}`}>
                                                Keep your account protected
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`rounded-xl p-3 text-sm ${Theme ? "bg-slate-800" : "bg-slate-50"
                                        }`}>
                                        <p className={`font-medium ${heading}`}>
                                            Profile information
                                        </p>
                                        <p className={`mt-1 text-xs ${muted}`}>
                                            Keep your contact details up to date.
                                        </p>
                                    </div>
                                </section>

                                {/* RESUME CARD */}
                                <section className={`${card} p-5`}>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                                            <FiFileText size={20} />
                                        </div>

                                        <div>
                                            <h3 className={`font-bold ${heading}`}>My Resume</h3>
                                            <p className={`mt-1 text-xs ${muted}`}>
                                                Your job application document
                                            </p>
                                        </div>
                                    </div>

                                    <label
                                        className={`flex cursor-pointer flex-col items-center rounded-xl border border-dashed p-5 text-center transition ${Theme
                                            ? "border-slate-700 hover:bg-slate-800"
                                            : "border-slate-300 hover:bg-slate-50"
                                            }`}
                                    >
                                        <FiUploadCloud size={25} className="mb-2 text-indigo-500" />

                                        <span className={`text-sm font-semibold ${heading}`}>
                                            {resume ? resume.name : "Upload your resume"}
                                        </span>

                                        <span className={`mt-1 text-xs ${muted}`}>
                                            PDF or DOC, up to 5 MB
                                        </span>

                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];

                                                if (!file) return;

                                                if (file.size > 5 * 1024 * 1024) {
                                                    alert("File size must be 5 MB or less.");
                                                    e.target.value = "";
                                                    return;
                                                }

                                                setResume(file);
                                            }}
                                        />
                                    </label>

                                    {resume && (
                                        <button
                                            type="button"
                                            onClick={() => setResume(null)}
                                            className="mt-3 text-xs font-medium text-red-500 hover:text-red-600"
                                        >
                                            Remove selected file
                                        </button>
                                    )}
                                </section>
                            </div>

                            {/* RIGHT PROFILE DETAILS */}
                            <div className="space-y-6 xl:col-span-2">
                                <section className={card}>
                                    <div className="border-b border-slate-200/20 px-5 py-5 sm:px-6">
                                        <h3 className={`text-lg font-bold ${heading}`}>
                                            Personal Information
                                        </h3>

                                        <p className={`mt-1 text-sm ${muted}`}>
                                            Your basic contact details.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                                        <div>
                                            <label className={labelClass}>Full Name</label>
                                            <input
                                                name="name"
                                                value={profile.name}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="Enter your full name"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={profile.email}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="you@example.com"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={profile.phone}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="Enter mobile number"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>Location</label>
                                            <input
                                                name="location"
                                                value={profile.location}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="City, Country"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* PROFESSIONAL DETAILS */}
                                <section className={card}>
                                    <div className="border-b border-slate-200/20 px-5 py-5 sm:px-6">
                                        <h3 className={`text-lg font-bold ${heading}`}>
                                            Professional Details
                                        </h3>

                                        <p className={`mt-1 text-sm ${muted}`}>
                                            Help JobPilot understand your career profile.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                                        <div>
                                            <label className={labelClass}>Target Job Role</label>
                                            <input
                                                name="role"
                                                value={profile.role}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="Java Developer"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>Experience Level</label>
                                            <select
                                                name="experience"
                                                value={profile.experience}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                className={inputClass}
                                            >
                                                <option>Fresher</option>
                                                <option>0–1 years</option>
                                                <option>1–3 years</option>
                                                <option>3–5 years</option>
                                                <option>5+ years</option>
                                            </select>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label className={labelClass}>About Me</label>
                                            <textarea
                                                name="about"
                                                value={profile.about}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                rows={4}
                                                placeholder="Tell recruiters about your skills, projects, and career goals..."
                                                className={`${inputClass} resize-y`}
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* SOCIAL LINKS */}
                                <section className={card}>
                                    <div className="border-b border-slate-200/20 px-5 py-5 sm:px-6">
                                        <h3 className={`text-lg font-bold ${heading}`}>
                                            Professional Links
                                        </h3>

                                        <p className={`mt-1 text-sm ${muted}`}>
                                            Add links to your work and professional profiles.
                                        </p>
                                    </div>

                                    <div className="space-y-5 p-5 sm:p-6">
                                        <div>
                                            <label className={labelClass}>
                                                <span className="flex items-center gap-2">
                                                    <FiGithub /> GitHub
                                                </span>
                                            </label>
                                            <input
                                                type="url"
                                                name="github"
                                                value={profile.github}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="https://github.com/username"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>
                                                <span className="flex items-center gap-2">
                                                    <FiLinkedin /> LinkedIn
                                                </span>
                                            </label>
                                            <input
                                                type="url"
                                                name="linkedin"
                                                value={profile.linkedin}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="https://linkedin.com/in/username"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>
                                                <span className="flex items-center gap-2">
                                                    <FiGlobe /> Portfolio
                                                </span>
                                            </label>
                                            <input
                                                type="url"
                                                name="portfolio"
                                                value={profile.portfolio}
                                                onChange={updateProfile}
                                                disabled={!editing}
                                                placeholder="https://yourportfolio.com"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                </section>

                                {editing && (
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:w-auto"
                                        >
                                            <FiSave />
                                            Save Profile
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <MobileNavigation />
        </div>
    );
}

export default Profile;
