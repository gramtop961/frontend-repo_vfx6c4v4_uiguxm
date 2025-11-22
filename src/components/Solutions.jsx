export default function Solutions() {
  const solutions = [
    {
      name: 'Personalized recommendations',
      desc: 'Increase AOV with 1:1 suggestions across PDP, cart, and email using sequence-aware models.',
      highlights: ['Vector search', 'Real-time events', 'Cold-start fallbacks']
    },
    {
      name: 'Semantic search & merchandising',
      desc: 'Blend LLM retrieval with business rules to balance relevance, margin, and inventory.',
      highlights: ['Query understanding', 'Facet boosting', 'Rules engine']
    },
    {
      name: 'Fraud detection & risk',
      desc: 'Detect anomalies and intervene in milliseconds with streaming inference and human-in-the-loop.',
      highlights: ['Graph features', 'Decisioning', 'Playbooks']
    },
  ]

  return (
    <section id="solutions" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Purpose-built solutions</h2>
            <p className="mt-4 text-slate-300">Modular building blocks wired for commerce data, so you can launch production systems in days, not quarters.</p>
          </div>
          <div className="grid gap-4">
            {solutions.map((s) => (
              <div key={s.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.highlights.map((h) => (
                        <span key={h} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200">{h}</span>
                      ))}
                    </div>
                  </div>
                  <button className="h-9 rounded-full border border-white/15 bg-white/5 px-3 text-sm text-white/90 hover:bg-white/10">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
