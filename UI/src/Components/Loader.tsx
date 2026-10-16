import { FiSettings } from "react-icons/fi";
import type { LoaderProps } from "../Interfaces/LoaderProps";
import { useSelector } from "react-redux";


function Loader({ title, subtitle, isloading }: LoaderProps) {
    const Theme = useSelector((state: any) => state.counter.value);
    return (
        <>
            {isloading && <>

                <div
                    className={`fixed inset-0 z-[9999] flex items-center justify-center ${Theme
                        ? "bg-slate-900/95"
                        : "bg-white/95"
                        }`}
                >
                    <div className="flex flex-col items-center gap-3 text-center">
                        <FiSettings
                            className={`animate-spin ${Theme ? "text-slate-200" : "text-slate-800"
                                }`}
                            size={38}
                        />

                        <div>
                            <p
                                className={`text-sm font-semibold ${Theme ? "text-slate-100" : "text-slate-800"
                                    }`}
                            >
                                {title || "Loading..."}
                            </p>

                            <p
                                className={`mt-1 text-xs ${Theme ? "text-slate-400" : "text-slate-500"
                                    }`}
                            >
                                {subtitle || "Please wait while we process your request."}
                            </p>
                        </div>
                    </div>
                </div>
            </>}
        </>
    );
}

export default Loader;