"use client";

import { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";

interface BookingWidgetProps {
    calLink?: string;
}

export function BookingWidget({ calLink = "a-mohammad-sam-460fdk/30min" }: BookingWidgetProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Fallback to a demo link if environment variable is missing
    const finalLink = process.env.NEXT_PUBLIC_CAL_LINK || calLink;
    // Normalize the link to a slug (strip protocol/host) and force embed mode
    const normalizedLink = finalLink
        .trim()
        .replace(/^https?:\/\//i, "")
        .replace(/^www\./i, "")
        .replace(/^cal\.com\//i, "");
    const baseUrl = `https://cal.com/${normalizedLink}`;
    const hasEmbedParam = /[?&]embed=1/i.test(baseUrl);
    const embedUrl = hasEmbedParam
        ? baseUrl
        : `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}embed=1`;

    return (
        <div className="flex flex-col gap-4 w-full h-full">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                    <p className="font-semibold">Setup Required</p>
                    <p>
                        To enable bookings, create a free account at <a href="https://cal.com" target="_blank" className="underline">Cal.com</a>.
                        Then, update your <code>.env</code> file with <code>NEXT_PUBLIC_CAL_LINK=your-username/event-type</code>.
                    </p>
                    <p className="mt-1 text-xs text-blue-600">
                        Current link trying to load: <strong>{embedUrl}</strong>
                    </p>
                </div>
            </div>

            <div className="w-full h-full min-h-[600px] border rounded-xl overflow-hidden bg-white relative shadow-sm">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 z-10">
                        <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
                        <span className="ml-2 text-neutral-500">Loading booking system...</span>
                    </div>
                )}
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    className="w-full h-full min-h-[600px] border-none"
                    onLoad={() => setIsLoading(false)}
                    title="Book Appointment"
                />
            </div>
        </div>
    );
}
