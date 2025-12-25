import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency for display
 */
export function formatPrice(price: string): string {
  return price.startsWith("€") ? price : `€${price}`;
}

/**
 * Scroll to element with smooth behavior
 */
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Check if we're in women's or men's section
 */
export function getSection(pathname: string): "women" | "men" | "home" {
  if (pathname.startsWith("/women")) return "women";
  if (pathname.startsWith("/men")) return "men";
  return "home";
}

/**
 * Get theme class based on section
 */
export function getThemeClass(section: "women" | "men" | "home"): string {
  if (section === "women") return "theme-women";
  if (section === "men") return "theme-men";
  return "";
}

/**
 * Truncate text to a certain length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * Generate mailto link
 */
export function getMailtoLink(email: string, subject?: string): string {
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${subjectParam}`;
}

/**
 * Generate tel link (for phone numbers)
 */
export function getTelLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/**
 * Delay function for async operations
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if code is running on client
 */
export const isClient = typeof window !== "undefined";

/**
 * Simple email validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format phone number for display (NL format)
 */
export function formatPhoneDisplay(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, "");

  // Format as +31 6 1234 5678
  if (cleaned.startsWith("31")) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`;
  }

  // Format as 06 1234 5678
  if (cleaned.startsWith("06") || cleaned.startsWith("6")) {
    const normalized = cleaned.startsWith("0") ? cleaned : "0" + cleaned;
    return `${normalized.slice(0, 2)} ${normalized.slice(2, 6)} ${normalized.slice(6)}`;
  }

  return phone;
}
