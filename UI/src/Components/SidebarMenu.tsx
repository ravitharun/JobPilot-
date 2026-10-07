
import {
    FiHome,
    FiBriefcase,
    FiZap,
    FiUser,
    FiSettings,
} from "react-icons/fi";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SidebarMenu() {
    const Theme = useSelector((state: any) => state.counter.value);

    // console.log(navigation, 'navigation');
    return (
        <>
            <nav className="flex-1 px-4 py-6">


                <p
                    className={`mb-3 px-3 text-xs font-semibold uppercase tracking-wider ${Theme
                        ? "text-slate-400"
                        : "text-slate-400"
                        }`}
                >
                    Menu
                </p>

                <div className="space-y-1">

                    <Link to="/">
                        <Sidebar
                            icon={<FiHome />}
                            label="Dashboard"

                        />
                    </Link>

                    <Link to="/Application">
                        <Sidebar
                            icon={<FiBriefcase />}
                            label="Applications"
                        />
                    </Link>

                    <Link to="/Automation">
                        <Sidebar
                            icon={<FiZap />}
                            label="Job Automation"
                        />
                    </Link>

                    <Link to="/Profile">
                        <Sidebar
                            icon={<FiUser />}
                            label="Profile"
                        />
                    </Link>

                </div>

                {/* Settings */}
                <p
                    className={`mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider ${Theme
                        ? "text-slate-400"
                        : "text-slate-400"
                        }`}
                >
                    Settings
                </p>

                <div className="space-y-1">
                    <Sidebar
                        icon={<FiSettings />}
                        label="Settings"
                    />
                </div>

            </nav>
        </>
    );
}

export default SidebarMenu;
