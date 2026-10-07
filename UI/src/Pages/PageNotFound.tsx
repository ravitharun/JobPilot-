
import {
    FiAlertTriangle,
    FiArrowLeft,
    FiHome,
    FiSearch,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
    const Theme = useSelector((state: any) => state.counter.value);

    return (
        <div
            className={`flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8 ${Theme
                ? "bg-slate-950 text-slate-100"
                : "bg-slate-50 text-slate-800"
                }`}
        >
            <div className="w-full max-w-2xl text-center">

                {/* Icon */}
                <div
                    className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-lg sm:h-24 sm:w-24 ${Theme ? "bg-slate-800" : "bg-slate-900"
                        }`}
                >
                    <FiAlertTriangle className="h-9 w-9 sm:h-11 sm:w-11" />
                </div>

                {/* 404 */}
                <h1
                    className={`text-7xl font-extrabold tracking-tight sm:text-8xl md:text-9xl ${Theme ? "text-white" : "text-slate-900"
                        }`}
                >
                    404
                </h1>

                {/* Title */}
                <h2
                    className={`mt-4 text-2xl font-bold sm:text-3xl ${Theme ? "text-white" : "text-slate-900"
                        }`}
                >
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
                    Sorry, the page you're looking for doesn't exist or may have
                    been moved to another location.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    {/* Go Back */}
                    <button
                        onClick={() => navigate(-1)}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold shadow-sm transition sm:w-auto ${Theme
                            ? "border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                            }`}
                    >
                        <FiArrowLeft size={18} />
                        Go Back
                    </button>

                    {/* Dashboard */}
                    <button
                        onClick={() => navigate("/")}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
                    >
                        <FiHome size={18} />
                        Go to Dashboard
                    </button>

                </div>

                {/* Search suggestion */}
                <div
                    className={`mx-auto mt-10 flex max-w-md items-center gap-3 rounded-xl border p-4 text-left shadow-sm ${Theme
                        ? "border-slate-700 bg-slate-900"
                        : "border-slate-200 bg-white"
                        }`}
                >
                    <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${Theme
                            ? "bg-slate-800 text-slate-300"
                            : "bg-slate-100 text-slate-600"
                            }`}
                    >
                        <FiSearch size={19} />
                    </div>

                    <div>
                        <p
                            className={`text-sm font-semibold ${Theme ? "text-slate-200" : "text-slate-800"
                                }`}
                        >
                            Looking for something?
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                            Try going back or return to your dashboard.
                        </p>
                    </div>
                </div>

                {/* Brand */}
                <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-400">

                    <div
                        className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${Theme ? "bg-slate-800" : "bg-slate-900"
                            }`}
                    >
                        <FiHome size={14} />
                    </div>

                    <span>
                        JobPilot
                    </span>

                </div>
            </div>
        </div>
    );
}

export default PageNotFound;