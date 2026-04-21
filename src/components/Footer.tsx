export default function Footer() {
  return (
    <footer className="border-t border-gold/20 py-8 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-heading text-xl font-bold text-white">
          {"<"}<span className="text-gold">Dev</span>{"/>"}
        </div>
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Target: Afford Medical Technologies Private Limited.
        </p>
      </div>
    </footer>
  );
}
