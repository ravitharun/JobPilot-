
import { useSelector } from 'react-redux';
import SidebarMenu from './SidebarMenu'
import { Link } from 'react-router-dom'

function MainSidebar() {
    const Theme = useSelector((state: any) => state.counter.value);
    return (
        <>
            <aside
                className={`fixed left-0 top-0 hidden h-screen w-64 border-r lg:block ${Theme
                    ? "border-slate-700 bg-slate-900/95"
                    : "border-slate-200 bg-white"
                    }`}
            >
                <div className="flex h-full flex-col">

                    {/* Logo */}
                    <Link to="/">
                        <div
                            className={`flex h-20 items-center border-b px-6 ${Theme
                                ? "border-slate-700"
                                : "border-slate-100"
                                }`}
                        >
                            <div className="flex items-center gap-3">

                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${Theme
                                        ? "bg-white"
                                        : "bg-slate-900"
                                        }`}
                                >
                                    <img
                                        src="/jobpilot-icon.svg"
                                        alt="JobPilot"
                                        className="h-6 w-6 object-contain"
                                    />
                                </div>

                                <div>
                                    <h1
                                        className={`text-lg font-bold ${Theme
                                            ? "text-white"
                                            : "text-slate-900"
                                            }`}
                                    >
                                        JobPilot
                                    </h1>

                                    <p
                                        className={`text-xs ${Theme
                                            ? "text-slate-400"
                                            : "text-slate-400"
                                            }`}
                                    >
                                        Career Automation
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Link>

                    {/* Sidebar Menu */}
                    <SidebarMenu />

                    {/* User */}
                    <div
                        className={`border-t p-4 ${Theme
                            ? "border-slate-700"
                            : "border-slate-100"
                            }`}
                    >
                        <div
                            className={`flex items-center gap-3 rounded-xl p-3 ${Theme
                                ? "bg-slate-800"
                                : "bg-slate-50"
                                }`}
                        >

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                                TR
                            </div>

                            <div className="min-w-0">
                                <p
                                    className={`truncate text-sm font-semibold ${Theme
                                        ? "text-white"
                                        : "text-slate-800"
                                        }`}
                                >
                                    Tharun Ravi
                                </p>

                                <p
                                    className={`truncate text-xs ${Theme
                                        ? "text-slate-400"
                                        : "text-slate-400"
                                        }`}
                                >
                                    Java Developer
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </aside>
        </>
    )
}

export default MainSidebar