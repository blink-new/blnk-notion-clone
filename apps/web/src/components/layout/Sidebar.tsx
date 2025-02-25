import { ChevronLeft, FileText, Plus, Settings } from 'lucide-react'
import { Button } from '../ui/button'

export const Sidebar = () => {
  return (
    <div className="w-64 border-r border-neutral-200 h-screen flex flex-col">
      <div className="p-4 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Workspace</h2>
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Getting Started
        </Button>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <Button className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Page
        </Button>
        <Button variant="ghost" size="icon" className="mt-2">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}