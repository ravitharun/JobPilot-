import { useDispatch, useSelector } from "react-redux";
import { UpdateNaviagtion } from "../Store/Navigation";

function Sidebar({ icon, label }: any) {
    const Theme = useSelector((state: any) => state.counter.value);
    const navigation = useSelector((state: any) => state.navigationPages.value);
    const updatenavigationPages = useDispatch();

    return (
        <button
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${navigation == label
                ? Theme
                    ? "bg-white text-slate-900"
                    : "bg-slate-900 text-white"
                : Theme
                    ? "text-slate-300 hover:bg-slate-800"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
            onClick={() => updatenavigationPages(UpdateNaviagtion(label))}
        >
            {icon}
            <span>{label}</span>
        </button>
    )
}

export default Sidebar