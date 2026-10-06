import {
    FiMenu,
    FiBell,
    FiSun,
    FiMoon,
    FiBriefcase,
} from "react-icons/fi";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import SidebarMenu from "./SidebarMenu";

function Headers() {
    const [darkMode, setDarkMode] = useState(false);

    const [handelMenu, sethandelMenu] = useState(false);

    return (
        <header
            className={`sticky top-0 z-20 border-b backdrop-blur transition-colors ${darkMode
                ? "border-slate-700 bg-slate-900/95"
                : "border-slate-200 bg-white/95"
                }`}
        >

            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left Side */}
                <div className="flex items-center gap-3">

                    {/* Mobile Menu */}
                    <button
                        className={`rounded-xl p-2.5 transition lg:hidden ${darkMode
                            ? "text-slate-300 hover:bg-slate-800"
                            : "text-slate-600 hover:bg-slate-100"
                            }`}
                        onClick={() => sethandelMenu(!handelMenu)}
                    >
                        {
                            handelMenu ?

                                <TfiClose size={22} /> : <FiMenu size={22} />}
                    </button>


                    {/* Page Icon */}
                    <div
                        className={`hidden h-10 w-10 items-center justify-center rounded-xl sm:flex ${darkMode
                            ? "bg-white text-slate-900"
                            : "bg-slate-900 text-white"
                            }`}
                    >
                        <FiBriefcase size={19} />
                    </div>


                    {/* Title */}
                    <div>

                        <p
                            className={`text-xs font-medium sm:text-sm ${darkMode
                                ? "text-slate-400"
                                : "text-slate-500"
                                }`}
                        >
                            Welcome back 👋
                        </p>

                        <h2
                            className={`text-lg font-bold sm:text-xl ${darkMode
                                ? "text-white"
                                : "text-slate-900"
                                }`}
                        >
                            Dashboard
                        </h2>

                    </div>

                </div>


                {/* Right Side */}
                <div className="flex items-center gap-2 sm:gap-3">


                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${darkMode
                            ? "border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                        title={darkMode ? "Light Mode" : "Dark Mode"}
                    >
                        {darkMode ? (
                            <FiSun size={19} />
                        ) : (
                            <FiMoon size={19} />
                        )}
                    </button>


                    {/* Notification */}
                    <button
                        className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition ${darkMode
                            ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                    >

                        <FiBell size={19} />

                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

                    </button>

                </div>
            </div>
            {handelMenu && <SidebarMenu />}

        </header>
    );
}

export default Headers;