export default function Logos() {
  const logos = [
    'ShopLift', 'NovaCart', 'Mercury', 'AstraPay', 'Quantum', 'Riviera', 'Polar', 'Helix'
  ]

  return (
    <section className="relative border-y border-white/10 bg-slate-900/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center text-xs uppercase tracking-wider text-slate-400">Trusted by modern commerce teams</div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 opacity-80 sm:grid-cols-3 md:grid-cols-4">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <div className="h-8 w-28 rounded-md bg-gradient-to-br from-slate-700/60 to-slate-800/60 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-slate-950 text-sm font-semibold text-slate-300">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
