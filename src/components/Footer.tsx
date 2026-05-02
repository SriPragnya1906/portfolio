export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-8 mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <span className="text-white text-[9px] font-bold font-mono">SP</span>
          </div>
          <span className="font-heading text-base font-semibold text-white">Sri<span className="text-gray-500">Pragnya</span></span>
        </div>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} B. S. Sri Pragnya. Designed & built with precision.
        </p>
      </div>
    </footer>
  );
}
