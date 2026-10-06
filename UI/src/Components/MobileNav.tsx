import React from "react";
import { Link } from "react-router-dom";
import {
    FiHome,
    FiBriefcase,
    FiZap,
    FiUser
} from "react-icons/fi";

function MobileNav({
    icon,
    label,
    active = false,
    route
}: any) {
    return (
        <Link to={route}>
            <button
                className={`flex h-full w-full flex-col items-center justify-center gap-1 text-xs ${active
                        ? "text-slate-900"
                        : "text-slate-400"
                    }`}
            >
                {React.cloneElement(icon, { size: 19 })}

                <span className={active ? "font-semibold" : ""}>
                    {label}
                </span>
            </button>
        </Link>
    );
}

function MobileNavigation() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white lg:hidden">
            <div className="grid h-16 grid-cols-4">

                <MobileNav
                    icon={<FiHome />}
                    label="Dashboard"
                    active
                    route="/"
                />

                <MobileNav
                    icon={<FiBriefcase />}
                    label="Application"
                    route="/Application"
                />

                <MobileNav
                    icon={<FiZap />}
                    label="Automation"
                    route="/Automation"
                />

                <MobileNav
                    icon={<FiUser />}
                    label="Profile"
                    route="/Profile"
                />

            </div>
        </nav>
    );
}

export default MobileNavigation;