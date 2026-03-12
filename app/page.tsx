import Link from "next/link";
import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--near-black)", color: "var(--cream)" }}
    >
      {/* Navbar  */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 5L25 15H15L20 5Z" fill="var(--gold)" />
            <circle
              cx="20"
              cy="25"
              r="10"
              stroke="var(--gold)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <span
            className="text-[18px] font-semibold tracking-tight"
            style={{ color: "var(--gold)" }}
          >
            AuthBase
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[14px] text-white/60">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#security" className="hover:text-white transition-colors">
            Security
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="px-5 py-2 text-[14px] font-medium rounded-full border transition-colors hover:bg-white/10"
            style={{ borderColor: "var(--warm-gray)", color: "var(--cream)" }}
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-5 py-2 text-[14px] font-semibold rounded-full transition-all hover:opacity-90 hover:-translate-y-[1px]"
            style={{
              backgroundColor: "var(--burgundy)",
              color: "var(--gold)",
              boxShadow: "0 2px 12px rgba(139, 21, 56, 0.35)",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* Background glow orbs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, var(--burgundy) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium mb-8 border z-10"
          style={{
            borderColor: "var(--gold)",
            color: "var(--gold)",
            backgroundColor: "rgba(212,175,55,0.08)",
          }}
        >
          <MdVerified className="text-[14px]" />
          Secure · Reliable · Production-ready
        </div>

        {/* Headline */}
        <h1
          className="text-[52px] md:text-[72px] font-semibold leading-[1.05] mb-6 z-10"
          style={{ letterSpacing: "-0.03em", color: "var(--cream)" }}
        >
          Authentication,{" "}
          <span style={{ color: "var(--gold)" }}>done right.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-[520px] text-[17px] leading-relaxed mb-10 z-10"
          style={{ color: "rgba(245,241,232,0.6)" }}
        >
          A polished, secure authentication foundation for your app. Sign up in
          seconds, or sign in to pick up where you left off.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/auth/signup"
            className="px-8 py-3.5 text-[15px] font-semibold rounded-full transition-all hover:opacity-90 hover:-translate-y-[2px]"
            style={{
              backgroundColor: "var(--burgundy)",
              color: "var(--gold)",
              boxShadow: "0 4px 20px rgba(139, 21, 56, 0.4)",
            }}
          >
            Create an account
          </Link>
          <Link
            href="/auth/login"
            className="px-8 py-3.5 text-[15px] font-medium rounded-full border transition-colors hover:bg-white/10"
            style={{
              borderColor: "rgba(245,241,232,0.25)",
              color: "var(--cream)",
            }}
          >
            Sign in →
          </Link>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section
        id="features"
        className="px-8 py-20 border-t border-white/10"
        style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-[12px] uppercase font-semibold tracking-widest mb-3"
            style={{ color: "var(--gold)" }}
          >
            Why AuthBase
          </p>
          <h2
            className="text-center text-[36px] font-semibold mb-14"
            style={{ color: "var(--cream)", letterSpacing: "-0.02em" }}
          >
            Built for security. <br />
            Designed for developers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Enterprise-grade Security",
                desc: "Server-side API proxying means your secrets never reach the client. Built on battle-tested patterns.",
              },
              {
                icon: <FaLock className="text-2xl" />,
                title: "End-to-end Validation",
                desc: "Zod schemas enforce strict type safety on both client and server, catching bad data before it reaches your backend.",
              },
              {
                icon: <FaUserShield className="text-2xl" />,
                title: "Seamless UX",
                desc: "Loading states, inline validation errors, and smooth transitions keep users informed at every step.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border transition-all hover:-translate-y-1"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "rgba(139,21,56,0.15)",
                    color: "var(--gold)",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  className="text-[17px] font-semibold mb-2"
                  style={{ color: "var(--cream)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "rgba(245,241,232,0.55)" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section
        id="security"
        className="px-8 py-20 border-t border-white/10 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[36px] font-semibold mb-4"
            style={{ color: "var(--cream)", letterSpacing: "-0.02em" }}
          >
            Ready to get started?
          </h2>
          <p
            className="text-[16px] mb-10"
            style={{ color: "rgba(245,241,232,0.55)" }}
          >
            Join and experience a secure, smooth authentication flow.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-10 py-4 text-[15px] font-semibold rounded-full transition-all hover:opacity-90 hover:-translate-y-[2px]"
            style={{
              backgroundColor: "var(--burgundy)",
              color: "var(--gold)",
              boxShadow: "0 4px 24px rgba(139, 21, 56, 0.45)",
            }}
          >
            Create your free account
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="flex items-center justify-between px-8 py-6 border-t border-white/10 text-[13px]"
        style={{ color: "rgba(245,241,232,0.35)" }}
      >
        <span>© 2026 AuthBase. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link
            href="/auth/login"
            className="hover:text-white/70 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="hover:text-white/70 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </footer>
    </div>
  );
}
