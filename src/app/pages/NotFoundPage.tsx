import { Link } from "react-router";
import { SerifDisplay } from "../components/SerifDisplay";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] paper-bg text-[#2C2621] px-6 lg:px-12 py-32">
      <main className="max-w-4xl mx-auto">
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#C2410C] mb-6">
          404 / unmapped field note
        </p>
        <SerifDisplay as="h1" className="text-5xl md:text-7xl leading-[0.9] tracking-tight mb-8">
          This page has not been charted yet.
        </SerifDisplay>
        <Link
          to="/"
          className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#0F766E] hover:text-[#C2410C] transition-colors"
        >
          Return home
        </Link>
      </main>
    </div>
  );
}
