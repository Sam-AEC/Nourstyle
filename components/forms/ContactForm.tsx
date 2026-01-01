"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/shared/Toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  section: "women" | "men";
  services: string[];
}

export function ContactForm({ section, services }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New ${section === "women" ? "Women's" : "Men's"} Service Inquiry for ${data.service}`,
          from_name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          section: section,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        toast.success("Message sent! We'll get back to you soon.");
        reset();

        setTimeout(() => setSubmitStatus("idle"), 2000);
      } else {
        toast.error("Something went wrong. Please try again.");
        setSubmitStatus("idle");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please check your connection.");
      setSubmitStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="label">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={cn("input", errors.name && "border-error")}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn("input", errors.email && "border-error")}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="label">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={cn("input", errors.phone && "border-error")}
          placeholder="+31 6 1234 5678"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="label">
          Service Interested In *
        </label>
        <select
          id="service"
          {...register("service")}
          className={cn("input", errors.service && "border-error")}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
          <option value="General Inquiry">General Inquiry</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-error">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label">
          Message *
        </label>
        <textarea
          id="message"
          {...register("message")}
          className={cn("textarea", errors.message && "border-error")}
          placeholder="Tell us about your preferred date, time, or any specific requests..."
          rows={5}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          className={cn(
            "mt-1 h-4 w-4 rounded border",
            errors.consent ? "border-error" : "border-neutral-300"
          )}
        />
        <label
          htmlFor="consent"
          className={cn(
            "text-sm",
            section === "women" ? "text-women-text-muted" : "text-men-text-muted"
          )}
        >
          I agree to the{" "}
          <a href="/privacy" className="link" target="_blank">
            Privacy Policy
          </a>{" "}
          and consent to being contacted about my inquiry. *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-error">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitStatus === "loading" || submitStatus === "success"}
        className="btn btn-primary btn-lg w-full"
      >
        {submitStatus === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
        {submitStatus !== "loading" && <Send className="h-5 w-5" />}
        {submitStatus === "loading" ? "Sending..." : "Send Message"}
      </button>


    </form>
  );
}
