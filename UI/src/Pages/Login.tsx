
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiBriefcase,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowRight,
} from "react-icons/fi";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log({ email, password, rememberMe });
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <div className="bg-indigo-600 text-white p-2.5 rounded-xl">
                        <FiBriefcase size={24} />
                    </div>
                    <span className="text-2xl font-bold text-slate-900">
                        Job<span className="text-indigo-600">Pilot</span>
                    </span>
                </Link>

                {/* Login Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            Welcome back
                        </h1>
                        <p className="text-slate-500 mt-2 text-sm">
                            Sign in to continue your job search.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Email address
                            </label>

                            <div className="relative">
                                <FiMail
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={18}
                                />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="email"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>

                                <Link
                                    to="/forgot-password"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="relative">
                                <FiLock
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={18}
                                />

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                                >
                                    {showPassword ? (
                                        <FiEyeOff size={18} />
                                    ) : (
                                        <FiEye size={18} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 accent-indigo-600 rounded"
                            />
                            <label
                                htmlFor="rememberMe"
                                className="text-sm text-slate-600"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-sm"
                        >
                            Sign in
                            <FiArrowRight size={18} />
                        </button>
                    </form>

                    {/* Sign Up */}
                    <p className="text-center text-sm text-slate-500 mt-7">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>

                <p className="text-center text-xs text-slate-400 mt-6">
                    Your career journey starts here.
                </p>
            </div>
        </div>
    );
}

export default Login;