
import { Clock3, Moon, ClipboardCheck } from 'lucide-react'

const alerts = [
  {
    title: 'Daily mood check-in',
    description: 'Complete your daily well-being assessment.',
    time: 'Pending',
    icon: ClipboardCheck,
    color: 'text-purple-400',
  },
  {
    title: 'Sleep record review',
    description: 'Review your previous sleep session.',
    time: 'Today',
    icon: Moon,
    color: 'text-cyan-400',
  },
  {
    title: 'Blood pressure measurement',
    description: 'Record your scheduled measurement.',
    time: 'Upcoming',
    icon: Clock3,
    color: 'text-amber-400',
  },
]

export default function AlertList() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">

      <h3 className="text-lg font-semibold text-white">
        Reminders & Activities
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Your health monitoring routine
      </p>

      <div className="mt-5 space-y-5">

        {alerts.map((alert) => {
          const Icon = alert.icon

          return (
            <div
              key={alert.title}
              className="flex items-start gap-3"
            >
              <div className={`rounded-xl bg-slate-800 p-3 ${alert.color}`}>
                <Icon size={19} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between gap-2">
                  <p className="text-sm font-medium text-white">
                    {alert.title}
                  </p>

                  <span className="text-xs text-slate-500">
                    {alert.time}
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  {alert.description}
                </p>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
