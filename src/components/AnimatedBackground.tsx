export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="gc-aurora-blob gc-aurora-hue-1 absolute -top-32 -left-24 h-[55vw] w-[55vw] rounded-full opacity-60 blur-3xl" />
        <div className="gc-aurora-blob-2 gc-aurora-hue-2 absolute top-1/3 -right-32 h-[60vw] w-[60vw] rounded-full opacity-55 blur-3xl" />
        <div className="gc-aurora-blob-3 gc-aurora-hue-3 absolute -bottom-40 left-1/4 h-[50vw] w-[50vw] rounded-full opacity-50 blur-3xl" />
      </div>
    </div>
  );
}
