import React from "react";
import { Link } from "react-router-dom";
import {
    FiHome,
    FiBriefcase,
    FiZap,
    FiUser
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { UpdateNaviagtion } from "../Store/Navigation";

function MobileNav({
    icon,
    label,

    route
}: any) {
    const Theme = useSelector((state: any) => state.counter.value);
    const navigation = useSelector((state: any) => state.navigationPages.value);
    const updatenavigationPages = useDispatch();

    return (
        <Link to={route}>
            <button
                className={`mx-auto flex flex-col items-center justify-center gap-0.5 rounded-lg px-2.5 py-1 text-[11px] transition-all ${navigation === label
                    ? Theme
                        ? "bg-slate-800 text-white"
                        : "bg-slate-200 text-slate-900"
                    : "text-slate-400"
                    }`}
                onClick={() => updatenavigationPages(UpdateNaviagtion(label))}
            >
                {React.cloneElement(icon, { size: 18 })}

                <span className={navigation === label ? "font-semibold" : ""}>
                    {label}
                </span>
            </button>
        </Link>
    );
}

function MobileNavigation() {
    const Theme = useSelector((state: any) => state.counter.value);

    return (
        <nav
            className={`fixed bottom-0 left-0 right-0 z-30 border-t lg:hidden ${Theme
                ? "border-slate-700 bg-slate-900/95"
                : "border-slate-200 bg-white"
                }`}
        >
            <div className="grid h-14 grid-cols-4 items-center px-5">
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