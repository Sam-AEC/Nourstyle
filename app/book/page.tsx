import { BookingWidget } from "@/components/shared/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Appointment | NourStyle",
    description: "Schedule your hair appointment online. Flexible hours available.",
};

export default function BookingPage() {
    return (
        <div className="container py-12 md:py-20">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-3xl font-bold font-heading">Book Your Appointment</h1>
                    <p className="text-neutral-500">
                        Choose a time that works for you. No phone calls required.
                    </p>
                </div>

                <div className="shadow-2xl rounded-xl overflow-hidden">
                    <BookingWidget />
                </div>
            </div>
        </div>
    );
}
