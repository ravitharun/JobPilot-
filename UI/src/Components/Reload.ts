import { useDispatch } from "react-redux";
import { UpdateNaviagtion } from "../Store/Navigation";

export const CheckReload = () => {
    const updatenavigationPages = useDispatch();
    let isreload: any = performance.getEntriesByType("navigation")[0]
    let path = window.location.pathname.split("/")[1]
    console.log(path + "reload")
    console.log(isreload.type == "reload")
    if (isreload.type == "reload") {

        return updatenavigationPages(UpdateNaviagtion(!path ? "Dashboard" : path == "Application" ? "Applications" : path == "Automation" ? "Job Automation" : path));
    }

}