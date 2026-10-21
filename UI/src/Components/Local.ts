export let user: any = JSON.parse(localStorage.getItem("User") ?? "")

export let User_JobPrefence = JSON.parse(localStorage.getItem("Job") ?? "")
export const WORK_MODE = ["Hybrid / On-site", "On-site", "Hybrid", "Remote", "Any"]
export let JOB_EXP = ["Fresher", "0-1", "1-3", "3-5"]
export let applications_ApplyLimit = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
export let SalaryRange = [
    "3 LPA",
    "4 LPA",
    "5 LPA",
    "6 LPA",
    "7 LPA",
    "8 LPA",
    "9 LPA",
    "10 LPA",
    "12 LPA",
    "15 LPA",
    "18 LPA",
    "20 LPA",
    "25 LPA",
    "30 LPA",
    "40 LPA",
    "50 LPA",
    "50+ LPA",
]