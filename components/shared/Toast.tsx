"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

let subscribers: ((toasts: Toast[]) => void)[] = [];
let toasts: Toast[] = [];

const notify = () => subscribers.forEach((s) => s([...toasts]));

const addToast = (message: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    toasts = [...toasts, { id, message, type }];
    notify();

    setTimeout(() => {
        toasts = toasts.filter((t) => t.id !== id);
        notify();
    }, 5000);
};

export const toast = {
    success: (message: string) => addToast(message, "success"),
    error: (message: string) => addToast(message, "error"),
};

export function Toaster() {
    const [activeToasts, setActiveToasts] = useState<Toast[]>([]);

    useEffect(() => {
        subscribers.push(setActiveToasts);
        return () => {
            subscribers = subscribers.filter((s) => s !== setActiveToasts);
        };
    }, []);

    if (activeToasts.length === 0) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:bottom-8 md:right-8">
            {activeToasts.map((t) => (
                <div
                    key={t.id}
                    className={cn(
                        "flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg transition-all animate-in slide-in-from-right-full",
                        t.type === "success"
                            ? "border-green-200 bg-white text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-200"
                            : "border-red-200 bg-white text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
                    )}
                >
                    {t.type === "success" ? (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    ) : (
                        <XCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{t.message}</p>
                    <button
                        onClick={() => {
                            toasts = toasts.filter((toast) => toast.id !== t.id);
                            notify();
                        }}
                        className="ml-4 rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/10"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            ))}
        </div>
    );
}
