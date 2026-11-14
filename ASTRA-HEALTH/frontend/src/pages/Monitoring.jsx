import { useState } from 'react'
import {
  Activity,
  Plus,
  HeartPulse,
  Thermometer,
  Droplets,
  Moon,
  Clock,
} from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const metricOptions = {
  heartRate: {
    label: 'Heart Rate',
    unit: 'BPM',
    icon: HeartPulse,
    color: '#22d3ee',
    initialData: [
      { time: '09:00', value: 70 },
      { time: '10:00', value: 74 },
      { time: '11:00', value: 72 },
      { time: '12:00', value: 76 },
      { time: '13:00', value: 73 },
    ],
  },
  temperature: {
    label: 'Body Temperature',
    unit: '°C',
    icon: Thermometer,
    color: '#fbbf24',
    initialData: [
      { time: '09:00', value: 36.6 },
      { time: '10:00', value: 36.7 },
      { time: '11:00', value: 36.8 },
      { time: '12:00', value: 36.7 },
      { time: '13:00', value: 36.8 },
    ],
  },
  glucose: {
    label: 'Blood Glucose',
    unit: 'mg/dL',
    icon: Droplets,
    color: '#60a5fa',
    initialData: [
      { time: '09:00', value: 92 },
      { time: '10:00', value: 96 },
      { time: '11:00', value: 94 },
      { time: '12:00', value: 98 },
      { time: '13:00', value: 96 },
    ],
  },
  sleep: {
    label: 'Sleep Duration',
    unit: 'hours',
    icon: Moon,
    color: '#c084fc',
    initialData: [
      { time: 'Mon', value: 7 },
      { time: 'Tue', value: 6.5 },
      { time: 'Wed', value: 7.5 },
      { time: 'Thu', value: 7.2 },
      { time: 'Fri', value: 8 },
    ],
  },
}

export default function Monitoring() {
  const [selectedMetric, setSelectedMetric] = useState('heartRate')
  const [reading, setReading] = useState('')
  const [records, setRecords] = useState(() =>
    Object.fromEntries(
      Object.entries(metricOptions).map(([key, metric]) => [
        key,
        metric.initialData,
      ])
    )
  )

  const currentMetric = metricOptions[selectedMetric]
  const CurrentIcon = currentMetric.icon
  const currentRecords = records[selectedMetric]

  const addReading = (event) => {
    event.preventDefault()

    const numericValue = Number(reading)

    if (reading.trim() === '' || !Number.isFinite(numericValue) || numericValue <= 0) {
      return
    }

    const newRecord = {
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      value: numericValue,
    }

    setRecords((previous) => ({
      ...previous,
      [selectedMetric]: [...previous[selectedMetric], newRecord],
    }))

    setReading('')
  }

  return (
    <div className="space-y-8">

      {/* Page Heading */}
      <section>
        <p className="text-sm text-cyan-400">
          MISSION CONTROL / MONITORING
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Health Monitoring
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Record measurements and monitor changes in your health indicators.
        </p>
      </section>

      {/* Demo Notice */}
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-cyan-400">
            Demonstration Mode:
          </span>{' '}
          The displayed history contains illustrative sample readings.
          New entries are stored only in the current page session.
        </p>
      </div>

      {/* Metric Selector */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-white">
          Select Health Indicator
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(metricOptions).map(([key, metric]) => {
            const Icon = metric.icon
            const isSelected = selectedMetric === key

            return (
              <button
                key={key}
                onClick={() => setSelectedMetric(key)}
                className={`rounded-2xl border p-5 text-left transition ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-800 bg-[#101a2b] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={23}
                    style={{ color: metric.color }}
                  />
                  {isSelected && (
                    <span className="text-xs text-cyan-400">Selected</span>
                  )}
                </div>

                <p className="mt-4 font-semibold text-white">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Unit: {metric.unit}
                </p>
              </button>
            )
          })}
        </div>
      </section>

      {/* Chart and Entry Form */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Trend Chart */}
        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5 xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                {currentMetric.label} Trend
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Recorded measurement history
              </p>
            </div>

            <CurrentIcon
              size={25}
              style={{ color: currentMetric.color }}
            />
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentRecords}>
                <CartesianGrid
                  stroke="#243247"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="time"
                  stroke="#64748b"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#101a2b',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                  formatter={(value) => [
                    `${value} ${currentMetric.unit}`,
                    currentMetric.label,
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={currentMetric.color}
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Add Reading Form */}
        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
              <Plus size={21} />
            </div>
            <div>
              <h2 className="font-semibold text-white">Add Measurement</h2>
              <p className="text-xs text-slate-500">
                Record a new reading
              </p>
            </div>
          </div>

          <form onSubmit={addReading} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Selected Indicator
              </label>
              <div className="rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-sm text-white">
                {currentMetric.label}
              </div>
            </div>

            <div>
              <label
                htmlFor="reading"
                className="mb-2 block text-sm text-slate-400"
              >
                Measurement ({currentMetric.unit})
              </label>

              <input
                id="reading"
                type="number"
                step="any"
                min="0.01"
                required
                value={reading}
                onChange={(event) => setReading(event.target.value)}
                placeholder="Enter measurement"
                className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Plus size={18} />
              Save Measurement
            </button>
          </form>

          <div className="mt-6 flex items-start gap-2 border-t border-slate-800 pt-4">
            <Clock size={16} className="mt-0.5 text-slate-500" />
            <p className="text-xs text-slate-500">
              The time is recorded automatically when you add a measurement.
            </p>
          </div>
        </div>
      </section>

      {/* Measurement History */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#101a2b]">
        <div className="border-b border-slate-800 p-5">
          <div className="flex items-center gap-3">
            <Activity className="text-cyan-400" size={21} />
            <div>
              <h2 className="font-semibold text-white">
                Measurement History
              </h2>
              <p className="text-xs text-slate-500">
                {currentMetric.label} records
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0b1423] text-slate-400">
              <tr>
                <th className="px-5 py-4 font-medium">Time</th>
                <th className="px-5 py-4 font-medium">Indicator</th>
                <th className="px-5 py-4 font-medium">Reading</th>
                <th className="px-5 py-4 font-medium">Source</th>
              </tr>
            </thead>

            <tbody>
              {[...currentRecords].reverse().map((record, index) => (
                <tr
                  key={`${record.time}-${index}`}
                  className="border-t border-slate-800 text-slate-300"
                >
                  <td className="px-5 py-4">{record.time}</td>
                  <td className="px-5 py-4">{currentMetric.label}</td>
                  <td className="px-5 py-4 font-semibold text-white">
                    {record.value} {currentMetric.unit}
                  </td>
                  <td className="px-5 py-4 text-cyan-400">
                    {index === 0 ? 'Latest entry' : 'Demo / recorded'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}