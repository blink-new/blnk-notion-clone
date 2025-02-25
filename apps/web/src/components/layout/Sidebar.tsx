import { ChevronLeft, ChevronRight, Plus, Search } from 'lucide-react'
import { Button } from '../ui/button'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } transition-all duration-300 ease-in-out bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 relative`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            {isOpen ? 'Notion Clone' : ''}
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-10 top-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            onClick={onToggle}
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>

        {isOpen && (
          <>
            <div className="relative mb-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search pages..."
                className="w-full pl-8 pr-4 py-2 bg-zinc-100 dark:bg-zinc-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button className="w-full justify-start" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              New Page
            </Button>

            <nav className="mt-4">
              <div className="space-y-1">
                {/* Pages will be rendered here */}
                <div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md cursor-pointer">
                  Getting Started
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </div>
  )
}