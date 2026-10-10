
import { toast } from "sonner";

type ErrorProps = {
    errormessage: string;
    code?: number | any;
    type?: string | any;
};

export function Error({ errormessage, code, type }: ErrorProps) {
    toast.error(errormessage, {
        description: `Error code: ${code ?? "Unknown"} | Type: ${type ?? "Error"}`,
    });
}
