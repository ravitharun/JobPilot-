import { useSelector } from "react-redux";

function Sidebar({ icon, label, active }: any) {
    const Theme = useSelector((state: any) => state.counter.value);
    return (
        <button
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active
                ? Theme
                    ? "bg-white text-slate-900"
                    : "bg-slate-900 text-white"
                : Theme
                    ? "text-slate-300 hover:bg-slate-800"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    )
}

export default Sidebar