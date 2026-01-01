"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
    GA_MEASUREMENT_ID?: string;
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
    const measurementId = GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID;

    if (!measurementId) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}
