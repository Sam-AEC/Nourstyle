"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface BookingWidgetProps {
    calLink?: string;
}

export function BookingWidget({ calLink = "nourstyle/30min" }: BookingWidgetProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Fallback to a demo link if environment variable is missing
    const finalLink = process.env.NEXT_PUBLIC_CAL_LINK || calLink;
    const embedUrl = `https://cal.com/${finalLink}`;

    return (
        <div className="w-full h-full min-h-[600px] border rounded-xl overflow-hidden bg-white relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 z-10">
                    <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
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
    );
}
