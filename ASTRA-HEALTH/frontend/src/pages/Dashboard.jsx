
import { Orbit, Info } from 'lucide-react'

import HealthOverview from '../components/Dashboard/HealthOverview'
import HeartRateChart from '../components/Charts/HeartRateChart'
import AlertList from '../components/Alerts/AlertList'

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <section className="flex flex-wrap items-center justify-between gap-4">

        <div>
          <p className="text-sm text-cyan-400">
            MISSION CONTROL / DASHBOARD
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            Welcome, Astronaut
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Monitor your health and review your latest indicators.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#101a2b] px-4 py-3">
          <Orbit className="text-cyan-400" size={22} />

          <div>
            <p className="text-xs text-slate-500">
              MISSION STATUS
            </p>
            <p className="text-sm font-semibold text-emerald-400">
              Monitoring Active
            </p>
          </div>
        </div>

      </section>

      {/* Demo Data Notice */}
      <div className="flex items-start gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">

        <Info className="mt-0.5 shrink-0 text-cyan-400" size={19} />

        <p className="text-sm text-slate-400">
          <span className="font-semibold text-cyan-400">
            Demonstration Mode:
          </span>{' '}
          This dashboard currently uses sample health data.
          Measurements are illustrative and do not represent
          a medical assessment.
        </p>

      </div>

      {/* Health Cards */}
      <HealthOverview />

      {/* Analytics and Activities */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <HeartRateChart />

        <AlertList />

      </section>

    </div>
  )
}
