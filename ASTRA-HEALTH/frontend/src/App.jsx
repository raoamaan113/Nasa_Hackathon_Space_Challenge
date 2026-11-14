
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom'

import {
  LayoutDashboard,
  Activity,
  ClipboardCheck,
  UserRound,
  BookOpen,
  FileText,
  Orbit,
} from 'lucide-react'

import Dashboard from './pages/Dashboard'
import Monitoring from './pages/Monitoring'
import Assessment from './pages/Assessment'
import HumanBody from './pages/HumanBody'
import Guidance from './pages/Guidance'
import Reports from './pages/Reports'

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Monitoring', path: '/monitoring', icon: Activity },
  { name: 'Assessment', path: '/assessment', icon: ClipboardCheck },
  { name: 'Human Body', path: '/human-body', icon: UserRound },
  { name: 'Guidance', path: '/guidance', icon: BookOpen },
  { name: 'Reports', path: '/reports', icon: FileText },
]

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#080d19] text-slate-100">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-20 flex h-screen w-64 flex-col border-r border-slate-800 bg-[#0c1424] p-5">

        {/* Logo */}
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-xl bg-cyan-400/10 p-3">
            <Orbit size={25} className="text-cyan-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wider">
              ASTRA<span className="text-cyan-400">HEALTH</span>
            </h1>
            <p className="text-xs text-slate-500">
              SPACE HEALTH SYSTEM
            </p>
          </div>
        </div>

        {/* Navigation */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Main Menu
        </p>

        <nav className="flex flex-col gap-2">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? 'bg-cyan-400/10 text-cyan-400'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-auto rounded-xl border border-slate-800 p-4">
          <p className="text-xs text-slate-500">MISSION STATUS</p>
          <p className="mt-2 font-semibold text-emerald-400">
            System Online
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Crew health monitoring active
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 min-h-screen">

        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-800 px-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Mission Control / ASTRA
            </p>
            <h2 className="mt-1 font-semibold">
              Astronaut Health Monitoring
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">Crew Member</p>
              <p className="text-xs text-slate-500">Mission Specialist</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
              <UserRound size={20} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/human-body" element={<HumanBody />} />
            <Route path="/guidance" element={<Guidance />} />
            <Route path="/reports" element={<Reports />} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>

      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
