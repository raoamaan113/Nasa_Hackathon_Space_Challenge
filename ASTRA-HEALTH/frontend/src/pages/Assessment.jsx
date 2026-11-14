import { useState } from 'react'
import {
  ClipboardCheck,
  HeartPulse,
  Thermometer,
  Droplets,
  Moon,
  Smile,
  Activity,
  RotateCcw,
  CheckCircle2,
  FileText,
} from 'lucide-react'

const initialForm = {
  heartRate: '',
  systolic: '',
  diastolic: '',
  temperature: '',
  glucose: '',
  sleep: '',
  mood: 'Good',
  symptoms: '',
}

const assessmentFields = [
  {
    name: 'heartRate',
    label: 'Heart Rate',
    unit: 'BPM',
    placeholder: 'e.g. 72',
    icon: HeartPulse,
  },
  {
    name: 'temperature',
    label: 'Body Temperature',
    unit: '°C',
    placeholder: 'e.g. 36.8',
    icon: Thermometer,
    step: '0.1',
  },
  {
    name: 'glucose',
    label: 'Blood Glucose',
    unit: 'mg/dL',
    placeholder: 'e.g. 96',
    icon: Droplets,
  },
  {
    name: 'sleep',
    label: 'Sleep Duration',
    unit: 'Hours',
    placeholder: 'e.g. 7.5',
    icon: Moon,
    step: '0.1',
  },
]

export default function Assessment() {
  const [form, setForm] = useState(initialForm)
  const [completed, setCompleted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCompleted(true)
  }

  const startNewAssessment = () => {
    setForm(initialForm)
    setCompleted(false)
  }

  return (
    <div className="space-y-8">

      {/* Page Heading */}
      <section>
        <p className="text-sm text-cyan-400">
          MISSION CONTROL / ASSESSMENT
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Daily Health Assessment
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Complete your health check-in and record how you are feeling today.
        </p>
      </section>

      {/* Demo Notice */}
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-cyan-400">
            Demonstration Mode:
          </span>{' '}
          This assessment is a frontend prototype. Submitted information
          is held temporarily in this page and is not sent to a medical system.
        </p>
      </div>

      {completed ? (

        /* Assessment Result */
        <section className="space-y-6">

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400" size={28} />

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Assessment Submitted
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Your responses have been recorded in this session.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-6">
            <div className="mb-6 flex items-center gap-3">
              <FileText className="text-cyan-400" size={22} />
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Assessment Summary
                </h2>
                <p className="text-xs text-slate-500">
                  Review the information you submitted
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {assessmentFields.map((field) => {
                const Icon = field.icon

                return (
                  <div
                    key={field.name}
                    className="rounded-xl border border-slate-800 bg-[#0b1423] p-4"
                  >
                    <div className="flex items-center gap-2 text-slate-400">
                      <Icon size={18} />
                      <span className="text-sm">{field.label}</span>
                    </div>

                    <p className="mt-3 text-2xl font-bold text-white">
                      {form[field.name]}{' '}
                      <span className="text-sm font-normal text-slate-400">
                        {field.unit}
                      </span>
                    </p>
                  </div>
                )
              })}

              <div className="rounded-xl border border-slate-800 bg-[#0b1423] p-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Activity size={18} />
                  <span className="text-sm">Blood Pressure</span>
                </div>

                <p className="mt-3 text-2xl font-bold text-white">
                  {form.systolic}/{form.diastolic}
                  <span className="ml-2 text-sm font-normal text-slate-400">
                    mmHg
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0b1423] p-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Smile size={18} />
                  <span className="text-sm">Current Mood</span>
                </div>

                <p className="mt-3 text-2xl font-bold text-white">
                  {form.mood}
                </p>
              </div>

            </div>

            <div className="mt-5 rounded-xl border border-slate-800 bg-[#0b1423] p-4">
              <p className="text-sm font-medium text-slate-300">
                Symptoms & Additional Notes
              </p>

              <p className="mt-2 whitespace-pre-wrap text-sm text-slate-400">
                {form.symptoms || 'No additional notes provided.'}
              </p>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              This summary records your answers only. It does not determine
              whether the measurements are medically normal or abnormal.
            </p>
          </div>

          <button
            onClick={startNewAssessment}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <RotateCcw size={17} />
            Start New Assessment
          </button>

        </section>

      ) : (

        /* Assessment Form */
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Physical Measurements */}
          <section className="rounded-2xl border border-slate-800 bg-[#101a2b] p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                <HeartPulse size={22} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Physical Health
                </h2>
                <p className="text-xs text-slate-500">
                  Enter your latest recorded measurements
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {assessmentFields.map((field) => {
                const Icon = field.icon

                return (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 flex items-center gap-2 text-sm text-slate-300"
                    >
                      <Icon size={17} className="text-cyan-400" />
                      {field.label} ({field.unit})
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="number"
                      min="0.01"
                      step={field.step || '1'}
                      required
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-white outline-none transition focus:border-cyan-400"
                    />
                  </div>
                )
              })}

            </div>

            {/* Blood Pressure */}
            <div className="mt-5">
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                <Activity size={17} className="text-cyan-400" />
                Blood Pressure (mmHg)
              </label>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    name="systolic"
                    min="1"
                    required
                    value={form.systolic}
                    onChange={handleChange}
                    placeholder="Systolic"
                    aria-label="Systolic blood pressure"
                    className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-white outline-none focus:border-cyan-400"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Systolic (upper number)
                  </p>
                </div>

                <div>
                  <input
                    type="number"
                    name="diastolic"
                    min="1"
                    required
                    value={form.diastolic}
                    onChange={handleChange}
                    placeholder="Diastolic"
                    aria-label="Diastolic blood pressure"
                    className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-white outline-none focus:border-cyan-400"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Diastolic (lower number)
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Wellbeing */}
          <section className="rounded-2xl border border-slate-800 bg-[#101a2b] p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-purple-400/10 p-3 text-purple-400">
                <Smile size={22} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Mental Well-being
                </h2>
                <p className="text-xs text-slate-500">
                  Report your sleep and current mood
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="mood"
                className="mb-2 block text-sm text-slate-300"
              >
                How are you feeling today?
              </label>

              <select
                id="mood"
                name="mood"
                value={form.mood}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-white outline-none focus:border-cyan-400"
              >
                <option>Very Good</option>
                <option>Good</option>
                <option>Neutral</option>
                <option>Low</option>
                <option>Stressed</option>
              </select>
            </div>

          </section>

          {/* Symptoms and Notes */}
          <section className="rounded-2xl border border-slate-800 bg-[#101a2b] p-6">

            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-amber-400/10 p-3 text-amber-400">
                <ClipboardCheck size={22} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Symptoms & Additional Notes
                </h2>
                <p className="text-xs text-slate-500">
                  Describe anything unusual you have experienced
                </p>
              </div>
            </div>

            <textarea
              name="symptoms"
              value={form.symptoms}
              onChange={handleChange}
              rows={4}
              placeholder="For example: headache, fatigue, dizziness, stress, or other observations..."
              className="w-full resize-y rounded-xl border border-slate-700 bg-[#0b1423] p-4 text-sm text-white outline-none focus:border-cyan-400"
            />

            <p className="mt-2 text-xs text-slate-500">
              You can leave this field empty if you have no additional notes.
            </p>

          </section>

          {/* Submit */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-md text-xs text-slate-500">
              Review your entries before submitting. This prototype does not
              replace professional medical assessment.
            </p>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <ClipboardCheck size={19} />
              Submit Assessment
            </button>
          </div>

        </form>
      )}

    </div>
  )
}