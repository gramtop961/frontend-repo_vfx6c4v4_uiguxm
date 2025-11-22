import { Shield, BarChart3, Rocket, Workflow, Cpu, Gauge } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Workflow className="h-5 w-5" />, 
      title: 'Unified ML pipeline',
      desc: 'From data ingestion to deployment — one seamless path with approvals, versioning, and CI/CD.',
    },
    {
      icon: <Cpu className="h-5 w-5" />, 
      title: 'Retail-tuned models',
      desc: 'Out-of-the-box LLM and recommender templates optimized for catalogs, search, and promotions.',
    },
    {
      icon: <Gauge className="h-5 w-5" />, 
      title: 'Realtime observability',
      desc: 'Track drift, latency, and conversion impact with dashboards wired to your events.',
    },
    {
      icon: <Shield className="h-5 w-5" />, 
      title: 'Governance & safety',
      desc: 'Fine-grained RBAC, audit trails, red-teaming, and automated rollbacks built in.',
    },
    {
      icon: <BarChart3 className="h-5 w-5" />, 
      title: 'Revenue analytics',
      desc: 'Attribute revenue lift to each model, A/B, and campaign. Close the loop to outcomes.',
    },
    {
      icon: <Rocket className="h-5 w-5" />, 
      title: 'Global scale',
      desc: 'Autoscale across regions with GPU-aware scheduling and cost controls.',
    },
  ]

  return (
    <section id="features" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to run AI for commerce</h2>
          <p className="mt-4 text-slate-300">Ship from idea to impact with secure, observable, and scalable infrastructure purpose-built for product teams.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition hover:border-emerald-400/30">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
