export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">See HyperScale in action</h3>
              <p className="mt-3 text-slate-200/90">Bring your catalog, events, and KPIs. We’ll show you how to launch models that drive measurable revenue — safely and at scale.</p>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-3 sm:grid-cols-2">
                <input required placeholder="Work email" className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <input required placeholder="Company" className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <input placeholder="Website" className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 sm:col-span-2" />
                <button className="h-11 rounded-lg bg-emerald-500 font-medium text-slate-900 hover:bg-emerald-400 sm:col-span-2">Request demo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
