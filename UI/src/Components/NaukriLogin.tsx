
import React, { useState } from "react";
import {
    FiX,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiBriefcase,
} from "react-icons/fi";
import api from "./ApiInsstance";
import { Toast } from "./Toast";
import { user } from "./Local";

interface NaukriLoginProps {
    onClose: () => void;
    onSubmit: (email: string, password: string) => void;
}

function NaukriLogin({ onClose, isDark }: NaukriLoginProps | any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);

        if (!email || !password) {
            return Toast({
                messages: "Fill the required inputs", code: 400, type: "Error".toUpperCase()
            })
        }
        try {
            const response = await api.post("naukri/user/Add", {
                "user_Naukri_email": email,
                "user_Naukri_passwrod": password,
                "User_appliocation_id": user.ApplicationuserId
            })
            console.log(response)
    
            return Toast({
                messages: response.data.message, code: response.status, type: "Sucesss".toUpperCase()
            })
        } catch (error: any) {



            return Toast({
                messages: error.response.message, code: error.status, type: "error".toUpperCase()
            })
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          
            <div
                className={`pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl border shadow-2xl ${isDark
                    ? "border-gray-700 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-900"
                    }`}
            >
                {/* Header */}
                <div
                    className={`flex items-center justify-between border-b px-6 py-5 ${isDark ? "border-gray-700" : "border-gray-200"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${isDark
                                ? "bg-blue-950 text-blue-400"
                                : "bg-blue-50 text-blue-600"
                                }`}
                        >
                            <FiBriefcase size={24} />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">
                                Connect Naukri
                            </h2>
                            <p
                                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"
                                    }`}
                            >
                                Connect your job portal account
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close popup"
                        className={`rounded-lg p-2 transition ${isDark
                            ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                    >
                        <FiX size={22} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 p-6">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="naukri-email"
                            className={`mb-2 block text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-700"
                                }`}
                        >
                            Naukri Email
                        </label>

                        <div
                            className={`flex items-center gap-3 rounded-xl border px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 ${isDark
                                ? "border-gray-700 bg-gray-800"
                                : "border-gray-300 bg-white"
                                }`}
                        >
                            <FiMail className="shrink-0 text-gray-400" size={18} />

                            <input
                                id="naukri-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Naukri email"
                                autoComplete="username"
                                required
                                className={`w-full bg-transparent py-3 text-sm outline-none ${isDark
                                    ? "text-white placeholder:text-gray-500"
                                    : "text-gray-900 placeholder:text-gray-400"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="naukri-password"
                            className={`mb-2 block text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-700"
                                }`}
                        >
                            Naukri Password
                        </label>

                        <div
                            className={`flex items-center gap-3 rounded-xl border px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 ${isDark
                                ? "border-gray-700 bg-gray-800"
                                : "border-gray-300 bg-white"
                                }`}
                        >
                            <FiLock className="shrink-0 text-gray-400" size={18} />

                            <input
                                id="naukri-password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Naukri password"
                                autoComplete="current-password"
                                required
                                className={`w-full bg-transparent py-3 text-sm outline-none ${isDark
                                    ? "text-white placeholder:text-gray-500"
                                    : "text-gray-900 placeholder:text-gray-400"
                                    }`}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={
                                    showPassword ? "Hide password" : "Show password"
                                }
                                className={`shrink-0 ${isDark
                                    ? "text-gray-400 hover:text-white"
                                    : "text-gray-400 hover:text-gray-700"
                                    }`}
                            >
                                {showPassword ? (
                                    <FiEyeOff size={18} />
                                ) : (
                                    <FiEye size={18} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Security message */}
                    <div
                        className={`rounded-xl p-3 ${isDark
                            ? "bg-blue-950/50 text-blue-300"
                            : "bg-blue-50 text-blue-700"
                            }`}
                    >
                        <p className="text-xs leading-5">
                            Your credentials should be verified before being
                            securely saved. Never store your password as plain text.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-1">
                        <button
                            type="button"
                            onClick={onClose}
                            className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${isDark
                                ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
                        >
                            Verify & Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NaukriLogin;
