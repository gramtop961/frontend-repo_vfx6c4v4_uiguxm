import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium">E-commerce AI DevOps Platform</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Build, deploy, and scale AI-driven commerce with confidence
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            HyperScale unifies model development, real-time operations, and observability so your team ships smarter product recommendations, search, and fraud detection — faster.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-emerald-400">
              Book a demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
