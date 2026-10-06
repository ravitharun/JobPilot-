import { FiSettings } from "react-icons/fi";
import type { LoaderProps } from "../Interfaces/LoaderProps";


function Loader({ title, subtitle }: LoaderProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="flex flex-col items-center gap-3 text-center">
                <FiSettings
                    className="animate-spin text-slate-800"
                    size={38}
                />

                <div>
                    <p className="text-sm font-semibold text-slate-800">
                        {title || "Add Title"}
                    </p>


                    <p className="mt-1 text-xs text-slate-500">
                        {subtitle || "add subtitle"}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Loader;