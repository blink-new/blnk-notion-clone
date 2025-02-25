import { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { Editor } from './components/editor/Editor'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex bg-zinc-50 dark:bg-zinc-900">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 overflow-auto">
        <Editor />
      </main>
    </div>
  )
}

export default App