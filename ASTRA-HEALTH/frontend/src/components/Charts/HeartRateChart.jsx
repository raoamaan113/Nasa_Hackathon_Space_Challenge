
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const heartRateData = [
  { day: 'Mon', bpm: 70 },
  { day: 'Tue', bpm: 74 },
  { day: 'Wed', bpm: 72 },
  { day: 'Thu', bpm: 76 },
  { day: 'Fri', bpm: 73 },
  { day: 'Sat', bpm: 71 },
  { day: 'Sun', bpm: 72 },
]

export default function HeartRateChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Heart Rate Trends
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Illustrative readings over the last seven days
        </p>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={heartRateData}>

            <CartesianGrid
              stroke="#243247"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              domain={['dataMin - 5', 'dataMax + 5']}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#101a2b',
                border: '1px solid #334155',
                borderRadius: '12px',
                color: '#fff',
              }}
              formatter={(value) => [`${value} BPM`, 'Heart Rate']}
            />

            <Line
              type="monotone"
              dataKey="bpm"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{
                fill: '#22d3ee',
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{ r: 7 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
