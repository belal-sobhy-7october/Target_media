export function SplineScene({
  className,
}: {
  scene?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
        alt="AI Robot"
        className="object-contain h-full w-full opacity-90 mix-blend-luminosity"
      />
    </div>
  );
}
