import Link from "next/link";
import Image from "next/image";
import { Scissors, Sparkles } from "lucide-react";
import { brand } from "@/config/brand";
import { imageConfig } from "@/config/images";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Logo Header */}
      <header className="absolute left-0 right-0 top-0 z-20 p-8 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
          {brand.name}
        </h1>
        <p className="mt-2 text-white/90 drop-shadow-md">{brand.tagline}</p>
      </header>

      {/* Split Screen */}
      <div className="grid flex-1 md:grid-cols-2">
        {/* Women's Section */}
        <Link
          href="/women"
          className="group relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-screen"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={imageConfig.womenHero}
              alt="Women's Hair Services"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-women-primary/30 to-black/40 transition-opacity group-hover:opacity-90" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6 p-8 text-center text-white">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/50 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-white">
              <Sparkles className="h-10 w-10" />
            </div>

            <div>
              <h2 className="text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl">
                Women
              </h2>
              <p className="mt-3 text-lg drop-shadow-md md:text-xl">
                Cuts • Color • Styling
              </p>
            </div>

            <div className="pt-4">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-6 py-3 text-lg font-semibold backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-neutral-900">
                Explore Services
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/80">
            <p className="text-sm">Tap to explore</p>
          </div>
        </Link>

        {/* Men's Section */}
        <Link
          href="/men"
          className="group relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-screen"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={imageConfig.menHero}
              alt="Men's Grooming Services"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-men-primary/30 to-black/40 transition-opacity group-hover:opacity-90" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6 p-8 text-center text-white">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/50 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-white">
              <Scissors className="h-10 w-10" />
            </div>

            <div>
              <h2 className="text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl">
                Men
              </h2>
              <p className="mt-3 text-lg drop-shadow-md md:text-xl">
                Haircuts • Fades • Beard
              </p>
            </div>

            <div className="pt-4">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-6 py-3 text-lg font-semibold backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-neutral-900">
                Explore Services
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/80">
            <p className="text-sm">Tap to explore</p>
          </div>
        </Link>
      </div>

      {/* Location Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/80 py-4 text-center text-white backdrop-blur-sm md:py-6">
        <p className="text-sm md:text-base">
          📍 {brand.contact.address.neighborhood}, {brand.contact.address.city} •{" "}
          📞 {brand.contact.phone} •{" "}
          By Appointment
        </p>
      </div>
    </main>
  );
}
