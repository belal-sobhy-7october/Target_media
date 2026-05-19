"use client";

export function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      className="w-full h-full object-cover object-center opacity-80"
    >
      <source
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4"
        type="video/mp4"
      />
    </video>
  );
}
