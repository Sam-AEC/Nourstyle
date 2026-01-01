"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/shared/Toast";
import { useI18n } from "@/lib/i18n-context";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

interface ContactFormProps {
  section: "women" | "men";
  services: string[];
}

export function ContactForm({ section, services }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { locale } = useI18n();

  const content = locale === "nl"
    ? {
        labels: {
          name: "Volledige Naam *",
          email: "Emailadres *",
          phone: "Telefoonnummer *",
          service: "Dienst waarin je interesse hebt *",
          message: "Bericht *",
          consentPrefix: "Ik ga akkoord met het",
          consentLink: "Privacybeleid",
          consentSuffix: "en ik geef toestemming om contact op te nemen over mijn vraag. *",
        },
        placeholders: {
          name: "Je naam",
          email: "jouw.email@example.com",
          phone: "+31 6 1234 5678",
          service: "Kies een dienst...",
          message: "Vertel ons je voorkeur voor datum, tijd of specifieke wensen...",
        },
        options: {
          generalInquiry: "Algemene Vraag",
        },
        validation: {
          nameMin: "Naam moet minimaal 2 tekens hebben",
          emailInvalid: "Vul een geldig emailadres in",
          phoneInvalid: "Vul een geldig telefoonnummer in",
          serviceRequired: "Kies een dienst",
          messageMin: "Bericht moet minimaal 10 tekens hebben",
          consentRequired: "Je moet akkoord gaan met het privacybeleid",
        },
        submit: {
          sending: "Versturen...",
          send: "Verstuur Bericht",
        },
        toast: {
          success: "Bericht verzonden. We reageren snel.",
          error: "Er ging iets mis. Probeer het opnieuw.",
          network: "Bericht niet verzonden. Controleer je verbinding.",
        },
        subjectPrefix: section === "women" ? "Nieuwe dames aanvraag voor" : "Nieuwe heren aanvraag voor",
      }
    : {
        labels: {
          name: "Full Name *",
          email: "Email Address *",
          phone: "Phone Number *",
          service: "Service Interested In *",
          message: "Message *",
          consentPrefix: "I agree to the",
          consentLink: "Privacy Policy",
          consentSuffix: "and consent to being contacted about my inquiry. *",
        },
        placeholders: {
          name: "Your name",
          email: "your.email@example.com",
          phone: "+31 6 1234 5678",
          service: "Select a service...",
          message: "Tell us about your preferred date, time, or any specific requests...",
        },
        options: {
          generalInquiry: "General Inquiry",
        },
        validation: {
          nameMin: "Name must be at least 2 characters",
          emailInvalid: "Please enter a valid email address",
          phoneInvalid: "Please enter a valid phone number",
          serviceRequired: "Please select a service",
          messageMin: "Message must be at least 10 characters",
          consentRequired: "You must agree to the privacy policy",
        },
        submit: {
          sending: "Sending...",
          send: "Send Message",
        },
        toast: {
          success: "Message sent. We will get back to you soon.",
          error: "Something went wrong. Please try again.",
          network: "Failed to send message. Please check your connection.",
        },
        subjectPrefix: section === "women" ? "New Women Service Inquiry for" : "New Men Service Inquiry for",
      };

  const contactFormSchema = z.object({
    name: z.string().min(2, content.validation.nameMin),
    email: z.string().email(content.validation.emailInvalid),
    phone: z.string().min(10, content.validation.phoneInvalid),
    service: z.string().min(1, content.validation.serviceRequired),
    message: z.string().min(10, content.validation.messageMin),
    consent: z.boolean().refine((val) => val === true, {
      message: content.validation.consentRequired,
    }),
  });

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
          subject: `${content.subjectPrefix} ${data.service}`,
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
        toast.success(content.toast.success);
        reset();

        setTimeout(() => setSubmitStatus("idle"), 2000);
      } else {
        toast.error(content.toast.error);
        setSubmitStatus("idle");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(content.toast.network);
      setSubmitStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="label">
          {content.labels.name}
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={cn("input", errors.name && "border-error")}
          placeholder={content.placeholders.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="label">
          {content.labels.email}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn("input", errors.email && "border-error")}
          placeholder={content.placeholders.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="label">
          {content.labels.phone}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={cn("input", errors.phone && "border-error")}
          placeholder={content.placeholders.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="label">
          {content.labels.service}
        </label>
        <select
          id="service"
          {...register("service")}
          className={cn("input", errors.service && "border-error")}
        >
          <option value="">{content.placeholders.service}</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
          <option value={content.options.generalInquiry}>{content.options.generalInquiry}</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-error">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="label">
          {content.labels.message}
        </label>
        <textarea
          id="message"
          {...register("message")}
          className={cn("textarea", errors.message && "border-error")}
          placeholder={content.placeholders.message}
          rows={5}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message.message}</p>
        )}
      </div>

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
          {content.labels.consentPrefix} {" "}
          <a href="/privacy" className="link" target="_blank">
            {content.labels.consentLink}
          </a>{" "}
          {content.labels.consentSuffix}
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-error">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={submitStatus === "loading" || submitStatus === "success"}
        className="btn btn-primary btn-lg w-full"
      >
        {submitStatus === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
        {submitStatus !== "loading" && <Send className="h-5 w-5" />}
        {submitStatus === "loading" ? content.submit.sending : content.submit.send}
      </button>
    </form>
  );
}
