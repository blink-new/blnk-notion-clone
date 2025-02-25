import { useMemo, useState, useCallback } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Start writing here...' }],
  },
]

export function Editor() {
  const [value, setValue] = useState<Descendant[]>(initialValue)
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const renderElement = useCallback(({ attributes, children, element }: any) => {
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>
      default:
        return <p {...attributes}>{children}</p>
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="prose dark:prose-invert prose-zinc max-w-none">
        <Slate editor={editor} value={value} onChange={setValue}>
          <Editable
            className="min-h-[calc(100vh-8rem)] outline-none"
            renderElement={renderElement}
            placeholder="Start writing..."
          />
        </Slate>
      </div>
    </div>
  )
}