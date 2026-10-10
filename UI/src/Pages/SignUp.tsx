import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiBriefcase,
    FiUser,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowRight,
} from "react-icons/fi";
import { toast, Toaster } from "sonner";
import api from "../Components/ApiInsstance";
import { Toast } from "../Components/Toast";
import { Redirectpage } from "../Components/Redirect";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState<any>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (formData.password.length > 8) {
            toast.message('Password must be less than 8 characters.', {
                description: 'Please enter a password with a maximum of 7 characters.',
            });
            return
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords does not match!");
            return;
        }

        console.log({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });


        const logindto: any = {
            username: formData.name,
            useremail: formData.email,
            Application_password: formData.password,
        }

        try {
            const response = await api.post("/jobPilot/singup", logindto)

            console.log(response.data.message)



            setTimeout(() => {
                if (response.status == 200) {
                    return Redirectpage();
                }
            }, 2500);
            Toast({
                messages: response.data.message || "hey",
                code: response.status,
                type: "Error",
            });


        } catch (error: any) {


            Toast({
                messages: error.response?.data?.ErrorMessage,
                code: error.status,
                type: "Error",
            });

        }
    };

    const inputClass =
        "w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10";

    const fields = [
        {
            name: "name",
            label: "Full name",
            type: "text",
            placeholder: "Enter your name",
            icon: FiUser,
            autoComplete: "name",
        },
        {
            name: "email",
            label: "Email address",
            type: "email",
            placeholder: "you@example.com",
            icon: FiMail,
            autoComplete: "email",
        },
    ];

    return (
        <main className="min-h-dvh bg-slate-50 flex items-center justify-center px-4 py-5 sm:py-6">
            <Toaster richColors />
            <div className="w-full max-w-lg">

                {/* Logo */}
                <Link
                    to="/"
                    className="mb-4 flex items-center justify-center gap-2"
                >
                    <div className="rounded-lg bg-indigo-600 p-2 text-white">
                        <FiBriefcase size={20} />
                    </div>

                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Job<span className="text-indigo-600">Pilot</span>
                    </span>
                </Link>

                {/* Signup Card */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="mb-5 text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            Create your account
                        </h1>
                        <p className="mt-1.5 text-sm text-slate-500">
                            Your next opportunity starts here.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">

                        {/* Name and Email */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {fields.map((field) => {
                                const Icon = field.icon;

                                return (
                                    <div key={field.name}>
                                        <label
                                            htmlFor={field.name}
                                            className="mb-1.5 block text-xs font-semibold text-slate-700"
                                        >
                                            {field.label}
                                        </label>

                                        <div className="relative">
                                            <Icon
                                                size={16}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                autoComplete={field.autoComplete}

                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Password and Confirm Password */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {[
                                {
                                    name: "password",
                                    label: "Password",
                                    visible: showPassword,
                                    toggle: () => setShowPassword((v) => !v),
                                    placeholder: "At least 8 characters",
                                },
                                {
                                    name: "confirmPassword",
                                    label: "Confirm password",
                                    visible: showConfirmPassword,
                                    toggle: () => setShowConfirmPassword((v) => !v),
                                    placeholder: "Re-enter password",
                                },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label
                                        htmlFor={field.name}
                                        className="mb-1.5 block text-xs font-semibold text-slate-700"
                                    >
                                        {field.label}
                                    </label>

                                    <div className="relative">
                                        <FiLock
                                            size={16}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                        />

                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type={field.visible ? "text" : "password"}
                                            placeholder={field.placeholder}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            autoComplete="new-password"
                                            minLength={8}
                                            required
                                            className={inputClass}
                                        />

                                        <button
                                            type="button"
                                            onClick={field.toggle}
                                            aria-label={
                                                field.visible ? "Hide password" : "Show password"
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
                                        >
                                            {field.visible ? (
                                                <FiEyeOff size={16} />
                                            ) : (
                                                <FiEye size={16} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]"
                        >
                            Create account
                            <FiArrowRight size={17} />
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                            Sign in
                        </Link>
                    </p>
                </section>

                <p className="mt-3 text-center text-xs text-slate-400">
                    Your career journey starts here.
                </p>
            </div>
        </main>
    );
}

export default Signup;