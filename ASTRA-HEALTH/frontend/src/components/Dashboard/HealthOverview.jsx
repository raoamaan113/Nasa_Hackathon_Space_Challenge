
import {
  HeartPulse,
  Activity,
  Thermometer,
  Droplets,
  Moon,
  Smile,
} from 'lucide-react'

import HealthMetricCard from '../HealthCards/HealthMetricCard'

const healthMetrics = [
  {
    title: 'Heart Rate',
    value: '72',
    unit: 'BPM',
    icon: HeartPulse,
    accent: 'red',
    description: 'Latest recorded measurement',
  },
  {
    title: 'Blood Pressure',
    value: '118/76',
    unit: 'mmHg',
    icon: Activity,
    accent: 'cyan',
    description: 'Latest recorded measurement',
  },
  {
    title: 'Body Temperature',
    value: '36.8',
    unit: '°C',
    icon: Thermometer,
    accent: 'amber',
    description: 'Latest recorded measurement',
  },
  {
    title: 'Blood Glucose',
    value: '96',
    unit: 'mg/dL',
    icon: Droplets,
    accent: 'blue',
    description: 'Latest recorded measurement',
  },
  {
    title: 'Sleep Duration',
    value: '7.2',
    unit: 'hours',
    icon: Moon,
    accent: 'purple',
    description: 'Previous sleep session',
  },
  {
    title: 'Mood',
    value: 'Good',
    unit: '',
    icon: Smile,
    accent: 'green',
    description: 'Latest mood assessment',
  },
]

export default function HealthOverview() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Health Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest recorded health indicators
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {healthMetrics.map((metric) => (
          <HealthMetricCard
            key={metric.title}
            {...metric}
          />
        ))}
      </div>
    </div>
  )
}
