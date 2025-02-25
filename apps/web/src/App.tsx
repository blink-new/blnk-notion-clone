import { Editor } from './components/editor/Editor'
import { Sidebar } from './components/layout/Sidebar'

function App() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          <input
            type="text"
            placeholder="Untitled"
            className="text-4xl font-bold w-full outline-none mb-8"
          />
          <Editor />
        </div>
      </main>
    </div>
  )
}

export default App