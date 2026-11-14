import { useState } from 'react'
import {
  Bell,
  CheckCircle2,
  Clock,
  HeartPulse,
  Moon,
  Smile,
  Thermometer,
  Droplets,
  Activity,
  AlertTriangle,
  ShieldCheck,
  ClipboardCheck,
  BookOpen,
  RotateCcw,
} from 'lucide-react'

const initialReminders = [
  {
    id: 1,
    title: 'Daily health assessment',
    description: 'Complete your daily physical health check-in.',
    time: 'Daily',
    icon: ClipboardCheck,
    color: 'text-cyan-400',
    completed: false,
  },
  {
    id: 2,
    title: 'Mood check-in',
    description: 'Record your current mood and emotional well-being.',
    time: 'Daily',
    icon: Smile,
    color: 'text-purple-400',
    completed: false,
  },
  {
    id: 3,
    title: 'Sleep record',
    description: 'Record and review your previous sleep session.',
    time: 'Daily',
    icon: Moon,
    color: 'text-indigo-400',
    completed: false,
  },
  {
    id: 4,
    title: 'Health measurements',
    description: 'Review your scheduled health measurements.',
    time: 'As scheduled',
    icon: HeartPulse,
    color: 'text-red-400',
    completed: false,
  },
]

const guidanceCards = [
  {
    id: 1,
    title: 'Heart Rate Observations',
    description:
      'Record your heart rate consistently and review changes over time.',
    steps: [
      'Follow the measurement procedure provided by your mission team.',
      'Record the reading and its measurement time.',
      'Note relevant activities or symptoms alongside the reading.',
      'Report concerning changes according to your mission medical protocol.',
    ],
    icon: HeartPulse,
    color: 'text-red-400',
  },
  {
    id: 2,
    title: 'Sleep & Recovery',
    description:
      'Sleep records can help you understand your rest patterns during a mission.',
    steps: [
      'Record your sleep duration after each sleep period.',
      'Note interruptions or difficulty sleeping.',
      'Review changes in your sleep pattern over time.',
      'Discuss persistent sleep difficulties with the appropriate mission medical team.',
    ],
    icon: Moon,
    color: 'text-purple-400',
  },
  {
    id: 3,
    title: 'Temperature & Glucose',
    description:
      'Keep physical measurements organized and follow approved measurement procedures.',
    steps: [
      'Use the measurement equipment provided for the mission.',
      'Follow the approved instructions for each measurement.',
      'Record the reading with its time and relevant context.',
      'Refer unusual or concerning readings to mission medical personnel.',
    ],
    icon: Thermometer,
    color: 'text-amber-400',
  },
  {
    id: 4,
    title: 'Emotional Well-being',
    description:
      'Regular mood check-ins can help identify changes in emotional well-being.',
    steps: [
      'Complete your mood check-in honestly.',
      'Record stress, isolation, or other concerns in your notes.',
      'Maintain communication with your crew and support team.',
      'Seek support through the mission-approved mental health resources.',
    ],
    icon: Smile,
    color: 'text-cyan-400',
  },
]

export default function Guidance() {
  const [reminders, setReminders] = useState(initialReminders)
  const [expandedGuidance, setExpandedGuidance] = useState(null)

  const completedCount = reminders.filter(
    (reminder) => reminder.completed
  ).length

  const toggleReminder = (id) => {
    setReminders((previous) =>
      previous.map((reminder) =>
        reminder.id === id
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    )
  }

  const resetReminders = () => {
    setReminders(initialReminders)
  }

  return (
    <div className="space-y-8">

      {/* Heading */}
      <section>
        <p className="text-sm text-cyan-400">
          MISSION CONTROL / ALERTS & GUIDANCE
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Alerts & Guidance
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Stay organized with health reminders and mission health guidance.
        </p>
      </section>

      {/* Demo Notice */}
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-cyan-400">
            Demonstration Mode:
          </span>{' '}
          These reminders and guidance cards are sample content. They are
          not connected to real-time health sensors or mission control.
        </p>
      </div>

      {/* Status Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Total Reminders</p>
            <Bell className="text-cyan-400" size={22} />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            {reminders.length}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Available health activities
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Completed</p>
            <CheckCircle2 className="text-emerald-400" size={22} />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            {completedCount}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Activities marked complete
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Remaining</p>
            <Clock className="text-amber-400" size={22} />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            {reminders.length - completedCount}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Activities not yet completed
          </p>
        </div>

      </section>

      {/* Health Reminders */}
      <section className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
              <Bell size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Health Reminders
              </h2>
              <p className="text-xs text-slate-500">
                Track your daily health activities
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetReminders}
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-slate-400">Daily activity progress</span>
            <span className="text-cyan-400">
              {completedCount}/{reminders.length} completed
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-slate-800"
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={reminders.length}
            aria-label="Reminder completion progress"
          >
            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-300"
              style={{
                width: `${(completedCount / reminders.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Reminder List */}
        <div className="space-y-3">
          {reminders.map((reminder) => {
            const Icon = reminder.icon

            return (
              <div
                key={reminder.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#0b1423] p-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`rounded-xl bg-slate-800 p-3 ${reminder.color}`}>
                    <Icon size={20} />
                  </div>

                  <div>
                    <p
                      className={`font-medium ${
                        reminder.completed
                          ? 'text-slate-500 line-through'
                          : 'text-white'
                      }`}
                    >
                      {reminder.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {reminder.description}
                    </p>

                    <p className="mt-2 text-xs text-slate-600">
                      {reminder.time}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleReminder(reminder.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    reminder.completed
                      ? 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-400'
                      : 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                  }`}
                >
                  {reminder.completed ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
            )
          })}
        </div>

      </section>

      {/* Alert Guidance */}
      <section className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={23}
            className="mt-0.5 shrink-0 text-amber-400"
          />

          <div>
            <h2 className="font-semibold text-white">
              Important Health Alert Guidance
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              If you experience severe, sudden, or worsening symptoms,
              follow your mission's emergency medical procedures and contact
              the designated medical support team immediately. Do not rely
              on this demonstration interface to determine medical urgency.
            </p>
          </div>
        </div>
      </section>

      {/* Guidance Cards */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-purple-400/10 p-3 text-purple-400">
            <BookOpen size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Health Guidance Library
            </h2>
            <p className="text-xs text-slate-500">
              Basic health monitoring instructions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {guidanceCards.map((card) => {
            const Icon = card.icon
            const isExpanded = expandedGuidance === card.id

            return (
              <div
                key={card.id}
                className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl bg-slate-800 p-3 ${card.color}`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {card.description}
                </p>

                {isExpanded && (
                  <div className="mt-4 space-y-3 border-t border-slate-800 pt-4">
                    {card.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-semibold text-cyan-400">
                          {index + 1}
                        </span>

                        <p className="text-sm leading-6 text-slate-400">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setExpandedGuidance(isExpanded ? null : card.id)
                  }
                  className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  {isExpanded ? 'Show Less ↑' : 'Read Guidance →'}
                </button>
              </div>
            )
          })}

        </div>
      </section>

      {/* Footer Information */}
      <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#101a2b] p-4">
        <ShieldCheck className="mt-0.5 shrink-0 text-emerald-400" size={20} />

        <p className="text-xs leading-5 text-slate-500">
          All guidance shown here is general educational content for the
          project prototype. Actual astronaut care must follow approved
          mission procedures and qualified medical advice.
        </p>
      </div>

    </div>
  )
}