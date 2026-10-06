

import SidebarMenu from './SidebarMenu'
import { Link } from 'react-router-dom'

function MainSidebar() {
    return (


        <>


            <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
                <div className="flex h-full flex-col">

                    {/* Logo */}
                    <Link to="/">
                        <div className="flex h-20 items-center border-b border-slate-100 px-6">
                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                                    <img
                                        src="/jobpilot-icon.svg"
                                        alt="JobPilot"
                                        className="h-6 w-6 object-contain"
                                    />
                                </div>

                                <div>
                                    <h1 className="text-lg font-bold text-slate-900">
                                        JobPilot
                                    </h1>

                                    <p className="text-xs text-slate-400">
                                        Career Automation
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Link>


                    {/* Sidebar Menu */}
                    <SidebarMenu />


                    {/* User */}
                    <div className="border-t border-slate-100 p-4">
                        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                                TR
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-slate-800">
                                    Tharun Ravi
                                </p>

                                <p className="truncate text-xs text-slate-400">
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