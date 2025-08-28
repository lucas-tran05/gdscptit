import type { FormData } from "@/types/form";
export async function submitForm(payload: FormData) {
    const res = await fetch("/api/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(`API error ${res.status}`);
    }

    return await res.json();
}

