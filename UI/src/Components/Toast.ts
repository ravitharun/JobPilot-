import { toast } from "sonner";

export function Toast({ messages, code, type }: any) {

    // Success: 200–299
    if (code >= 200 && code < 300) {
        return toast.success(messages, {
            description: `Success code: ${code ?? "Unknown"} | Type: ${type ?? "success"}`,
        });
    }

    // Client errors: 400–499
    if (code >= 400 && code < 500) {
        return toast.error(messages, {
            description: `Client error code: ${code ?? "Unknown"} | Type: ${type ?? "Error"}`,
        });
    }

    // Server errors: 500–599
    if (code >= 500 && code < 600) {
        return toast.error(messages, {
            description: `Server error code: ${code ?? "Unknown"} | Type: ${type ?? "Error"}`,
        });
    }

    // Redirects: 300–399
    if (code >= 300 && code < 400) {
        return toast.warning(messages, {
            description: `Redirect code: ${code} | Type: ${type ?? "Warning"}`,
        });
    }

    // Other or missing status codes
    return toast.error(messages, {
        description: `Unexpected status code: ${code ?? "Unknown"} | Type: ${type ?? "Error"}`,
    });
}