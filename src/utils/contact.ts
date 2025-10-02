import { Inputs } from "@/types";

export const sendEmail = async (data: Inputs) => {
    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return { success: true };
        } else {
            return { success: false };
        }

    } catch {
        return { success: false };
    }
}