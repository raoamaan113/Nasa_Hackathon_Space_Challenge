import { useState } from 'react'
import {
  Activity,
  MapPin,
  ClipboardList,
  CheckCircle2,
  Trash2,
} from 'lucide-react'
import HumanBodyMap from '../components/HumanBody/HumanBodyMap'

const symptomOptions = [
  'Pain',
  'Headache',
  'Dizziness',
  'Swelling',
  'Numbness',
  'Fatigue',
  'Muscle weakness',
  'Other discomfort',
]

export default function HumanBody() {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [notes, setNotes] = useState('')
  const [reports, setReports] = useState([])

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((previous) =>
      previous.includes(symptom)
        ? previous.filter((item) => item !== symptom)
        : [...previous, symptom]
    )
  }

  const saveReport = (event) => {
    event.preventDefault()

    if (!selectedRegion) {
      alert('Please select a body region first.')
      return
    }

    if (selectedSymptoms.length === 0 && !notes.trim()) {
      alert('Please select a symptom or enter additional notes.')
      return
    }

    const newReport = {
      id: Date.now(),
      region: selectedRegion,
      symptoms: [...selectedSymptoms],
      notes: notes.trim(),
      time: new Date().toLocaleString(),
    }

    setReports((previous) => [newReport, ...previous])

    setSelectedRegion('')
    setSelectedSymptoms([])
    setNotes('')
  }

  const deleteReport = (id) => {
    setReports((previous) => previous.filter((report) => report.id !== id))
  }

  return (
    <div className="space-y-8">

      {/* Heading */}
      <section>
        <p className="text-sm text-cyan-400">
          MISSION CONTROL / BODY MONITORING
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Interactive Human Body
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Select a body region and record any symptoms or discomfort.
        </p>
      </section>

      {/* Demo Notice */}
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-cyan-400">
            Demonstration Mode:
          </span>{' '}
          Reports are stored temporarily in the current page session.
          This tool records symptoms and does not diagnose medical conditions.
        </p>
      </div>

      {/* Main Layout */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Body Map */}
        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">

          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                <Activity size={22} />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Body Region Selector
                </h2>
                <p className="text-xs text-slate-500">
                  Click a region to select it
                </p>
              </div>
            </div>
          </div>

          <HumanBodyMap
            selectedRegion={selectedRegion}
            onSelect={setSelectedRegion}
          />

          <div className="mt-4 rounded-xl border border-slate-800 bg-[#0b1423] p-4">
            <p className="text-xs text-slate-500">
              SELECTED BODY REGION
            </p>

            <div className="mt-2 flex items-center gap-2">
              <MapPin size={18} className="text-cyan-400" />

              <p className="font-semibold text-white">
                {selectedRegion || 'No region selected'}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-700" />
              Not selected
            </span>

            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-cyan-400" />
              Selected
            </span>
          </div>

        </div>

        {/* Symptom Form */}
        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-purple-400/10 p-3 text-purple-400">
              <ClipboardList size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Symptom Reporting
              </h2>
              <p className="text-xs text-slate-500">
                Describe what you are experiencing
              </p>
            </div>
          </div>

          <form onSubmit={saveReport} className="space-y-6">

            {/* Selected Region */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Selected Region
              </label>

              <div className="rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-sm text-white">
                {selectedRegion || 'Select a region from the body map'}
              </div>
            </div>

            {/* Symptoms */}
            <div>
              <p className="mb-3 text-sm font-medium text-slate-300">
                Select Symptoms
              </p>

              <div className="grid grid-cols-2 gap-3">
                {symptomOptions.map((symptom) => (
                  <label
                    key={symptom}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition ${
                      selectedSymptoms.includes(symptom)
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                        : 'border-slate-700 bg-[#0b1423] text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => toggleSymptom(symptom)}
                      className="accent-cyan-400"
                    />

                    {symptom}
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="body-notes"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Additional Details
              </label>

              <textarea
                id="body-notes"
                rows={4}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Describe the discomfort, when it started, or any other observations..."
                className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-sm text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <CheckCircle2 size={19} />
              Save Symptom Report
            </button>

          </form>
        </div>

      </section>

      {/* Reports */}
      <section className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">

        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Symptom Reports
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Your recorded observations
            </p>
          </div>

          <span className="rounded-lg bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-400">
            {reports.length} Reports
          </span>
        </div>

        {reports.length === 0 ? (

          <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">
            <ClipboardList
              size={32}
              className="mx-auto text-slate-600"
            />

            <p className="mt-3 font-medium text-slate-300">
              No symptom reports yet
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Select a body region and submit your first report.
            </p>
          </div>

        ) : (

          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="rounded-xl border border-slate-800 bg-[#0b1423] p-4"
              >
                <div className="flex items-start justify-between gap-3">

                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-cyan-400" />

                      <h3 className="font-semibold text-white">
                        {report.region}
                      </h3>
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {report.time}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteReport(report.id)}
                    aria-label="Delete symptom report"
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-red-400/10 hover:text-red-400"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {report.symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>

                {report.notes && (
                  <p className="mt-3 text-sm text-slate-400">
                    {report.notes}
                  </p>
                )}
              </div>
            ))}
          </div>

        )}

      </section>

    </div>
  )
}