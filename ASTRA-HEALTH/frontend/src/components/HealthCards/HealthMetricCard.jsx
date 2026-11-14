
export default function HealthMetricCard({
  title,
  value,
  unit,
  icon: Icon,
  description,
  accent = 'cyan',
}) {
  const accents = {
    cyan: 'bg-cyan-400/10 text-cyan-400',
    red: 'bg-red-400/10 text-red-400',
    blue: 'bg-blue-400/10 text-blue-400',
    purple: 'bg-purple-400/10 text-purple-400',
    green: 'bg-emerald-400/10 text-emerald-400',
    amber: 'bg-amber-400/10 text-amber-400',
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5 transition hover:border-slate-600">

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">
          {title}
        </p>

        <div className={`rounded-xl p-3 ${accents[accent]}`}>
          <Icon size={21} />
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        <h3 className="text-3xl font-bold tracking-tight text-white">
          {value}
        </h3>

        <span className="text-sm text-slate-400">
          {unit}
        </span>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {description}
      </p>

    </div>
  )
}
