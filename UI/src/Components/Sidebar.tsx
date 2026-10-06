
function Sidebar({ icon, label, active }: any) {
    return (
        <button
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-100"
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    )
}

export default Sidebar