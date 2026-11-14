import { useMemo, useState } from "react";
import {
  FileText,
  Download,
  Printer,
  Activity,
  HeartPulse,
  ClipboardList,
  Search,
  CalendarDays,
  Filter,
  Eye,
} from "lucide-react";

const demoReports = [
  {
    id: 1,
    date: "2026-11-14",
    time: "09:00",
    type: "Heart Rate",
    value: "72 BPM",
    source: "Health Monitoring",
    status: "Recorded",
    details: "Illustrative heart rate measurement.",
  },
  {
    id: 2,
    date: "2026-11-14",
    time: "09:15",
    type: "Blood Pressure",
    value: "118/76 mmHg",
    source: "Health Assessment",
    status: "Recorded",
    details: "Illustrative blood pressure measurement.",
  },
  {
    id: 3,
    date: "2026-11-13",
    time: "21:00",
    type: "Sleep",
    value: "7.5 Hours",
    source: "Health Assessment",
    status: "Recorded",
    details: "Illustrative sleep duration.",
  },
  {
    id: 4,
    date: "2026-11-13",
    time: "14:30",
    type: "Body Temperature",
    value: "36.8 °C",
    source: "Health Monitoring",
    status: "Recorded",
    details: "Illustrative body temperature measurement.",
  },
  {
    id: 5,
    date: "2026-11-12",
    time: "11:20",
    type: "Blood Glucose",
    value: "96 mg/dL",
    source: "Health Monitoring",
    status: "Recorded",
    details: "Illustrative blood glucose measurement.",
  },
  {
    id: 6,
    date: "2026-11-12",
    time: "16:45",
    type: "Symptom Report",
    value: "Chest discomfort",
    source: "Body Monitoring",
    status: "Reported",
    details: "Illustrative symptom report for the chest region.",
  },
  {
    id: 7,
    date: "2026-11-11",
    time: "10:00",
    type: "Mood",
    value: "Good",
    source: "Health Assessment",
    status: "Recorded",
    details: "Illustrative mood check-in.",
  },
];

const categories = [
  "All",
  "Heart Rate",
  "Blood Pressure",
  "Body Temperature",
  "Blood Glucose",
  "Sleep",
  "Mood",
  "Symptom Report",
];

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = useMemo(() => {
    return demoReports.filter((report) => {
      const matchesCategory =
        selectedCategory === "All" || report.type === selectedCategory;

      const query = searchTerm.toLowerCase();

      const matchesSearch =
        report.type.toLowerCase().includes(query) ||
        report.value.toLowerCase().includes(query) ||
        report.source.toLowerCase().includes(query) ||
        report.date.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const exportCSV = () => {
    const headers = [
      "Date",
      "Time",
      "Category",
      "Value",
      "Source",
      "Status",
      "Details",
    ];

    const rows = filteredReports.map((report) => [
      report.date,
      report.time,
      report.type,
      report.value,
      report.source,
      report.status,
      report.details,
    ]);

    const escapeCSV = (value) => `"${String(value).replace(/"/g, '""')}"`;

    const csvContent = [headers, ...rows]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "astra-health-report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Heading */}
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-400">MISSION CONTROL / REPORTS</p>

          <h1 className="mt-2 text-3xl font-bold text-white">Health Reports</h1>

          <p className="mt-2 text-sm text-slate-400">
            Review and export your health monitoring records.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <Printer size={17} />
            Print
          </button>

          <button
            type="button"
            onClick={exportCSV}
            disabled={filteredReports.length === 0}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download size={17} />
            Export CSV
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium transition"
          >
            Print Summary
          </button>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-cyan-400">
            Demonstration Data:
          </span>{" "}
          The records on this page are illustrative examples. They are not
          retrieved from real astronauts or connected medical devices.
        </p>
      </div>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Total Records</p>
            <FileText size={22} className="text-cyan-400" />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            {demoReports.length}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Available demonstration records
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Health Measurements</p>
            <HeartPulse size={22} className="text-red-400" />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            {
              demoReports.filter(
                (report) => report.source === "Health Monitoring",
              ).length
            }
          </p>

          <p className="mt-2 text-xs text-slate-500">Monitoring records</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Symptom Reports</p>
            <Activity size={22} className="text-amber-400" />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            {
              demoReports.filter((report) => report.type === "Symptom Report")
                .length
            }
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Recorded symptom observations
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="rounded-2xl border border-slate-800 bg-[#101a2b] p-5">
        <div className="mb-5 flex items-center gap-3">
          <Filter size={21} className="text-cyan-400" />

          <div>
            <h2 className="font-semibold text-white">Find Health Records</h2>

            <p className="text-xs text-slate-500">
              Search or filter the available records
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search records..."
              className="w-full rounded-xl border border-slate-700 bg-[#0b1423] py-3 pl-10 pr-4 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-[#0b1423] p-3 text-sm text-white outline-none focus:border-cyan-400"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Showing {filteredReports.length} of {demoReports.length} records
        </p>
      </section>

      {/* Report History */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#101a2b]">
        <div className="flex items-center gap-3 border-b border-slate-800 p-5">
          <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
            <ClipboardList size={21} />
          </div>

          <div>
            <h2 className="font-semibold text-white">Health Record History</h2>

            <p className="text-xs text-slate-500">
              Review individual measurements and observations
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-[#0b1423] text-slate-400">
              <tr>
                <th className="px-5 py-4 font-medium">Date & Time</th>
                <th className="px-5 py-4 font-medium">Category</th>
                <th className="px-5 py-4 font-medium">Recorded Value</th>
                <th className="px-5 py-4 font-medium">Source</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Details</th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="border-t border-slate-800 text-slate-300"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={15} className="text-slate-500" />

                      <div>
                        <p>{report.date}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {report.time}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 font-medium text-white">
                    {report.type}
                  </td>

                  <td className="px-5 py-4">{report.value}</td>

                  <td className="px-5 py-4 text-slate-400">{report.source}</td>

                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                      {report.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() => setSelectedReport(report)}
                      aria-label={`View details for ${report.type}`}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-cyan-400/10 hover:text-cyan-400"
                    >
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredReports.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-slate-500"
                  >
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Report Details Modal */}
      {selectedReport && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedReport(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-detail-title"
            className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#101a2b] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2
                id="report-detail-title"
                className="text-lg font-semibold text-white"
              >
                Record Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="text-sm text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500">Category</p>
                <p className="mt-1 font-semibold text-white">
                  {selectedReport.type}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Recorded Value</p>
                <p className="mt-1 font-semibold text-cyan-400">
                  {selectedReport.value}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Date & Time</p>
                <p className="mt-1 text-sm text-white">
                  {selectedReport.date} at {selectedReport.time}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Source</p>
                <p className="mt-1 text-sm text-white">
                  {selectedReport.source}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Description</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  {selectedReport.details}
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3">
                <p className="text-xs text-cyan-400">DEMONSTRATION RECORD</p>
                <p className="mt-1 text-xs text-slate-400">
                  This record is illustrative and is not a verified medical
                  record.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
