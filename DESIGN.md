# Notion Clone Design Document

## Overview
A modern document collaboration platform inspired by Notion, focusing on real-time block-based editing and seamless collaboration.

## Core Features

### 1. Block Editor
- Rich text editing with markdown support
- Block types: Text, Headings, Lists, Code, Images, Tables
- Drag-and-drop block reordering
- Block transformations (convert between types)
- Slash commands for quick block insertion

### 2. Document Organization
- Hierarchical document tree
- Infinite nesting of pages
- Quick search and navigation
- Favorites and recent documents
- Drag-and-drop organization

### 3. Real-time Collaboration
- Multiple cursors with user presence
- Real-time updates across clients
- Conflict resolution
- User avatars and activity indicators

## User Interface

### Layout
- Responsive three-column layout:
  1. Navigation sidebar (collapsible)
  2. Document tree (collapsible)
  3. Main content area

### Components
1. Navigation Sidebar
   - User profile
   - Quick actions
   - Workspace switcher
   - Settings access

2. Document Tree
   - Hierarchical view
   - Expand/collapse controls
   - Document icons and status
   - Search bar

3. Editor
   - Floating toolbar
   - Block handles
   - Plus button for new blocks
   - Command palette (⌘+K)

4. Collaboration UI
   - User avatars
   - Cursor indicators
   - Share button
   - Comments interface

## Technical Architecture

### Frontend
- React + Vite
- TailwindCSS + shadcn/ui for styling
- ProseMirror for rich text editing
- Yjs for real-time collaboration
- Jotai for state management

### Backend
- Hono.js API server
- Firebase for authentication
- Firestore for document storage
- WebSocket for real-time updates

### Data Models

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  workspaces: string[];
}

interface Workspace {
  id: string;
  name: string;
  members: WorkspaceMember[];
  rootDocument: string;
}

interface Document {
  id: string;
  title: string;
  content: Block[];
  parent: string | null;
  workspace: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

interface Block {
  id: string;
  type: BlockType;
  content: any;
  children: Block[];
}

type BlockType = 
  | 'text'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'bulletList'
  | 'numberedList'
  | 'code'
  | 'image'
  | 'table';
```

## User Experience

### Document Creation
1. Click "+" button or use keyboard shortcut
2. Choose template or start blank
3. Start typing or use slash commands
4. Auto-save in real-time

### Block Manipulation
1. Hover reveals block handle
2. Drag handle to reorder
3. Click handle for block menu
4. Use slash commands for quick actions

### Collaboration
1. Share button opens permissions modal
2. Set access level (view/edit)
3. Invite by email or generate link
4. Real-time cursor and edit tracking

### Search and Navigation
1. Global search with ⌘+K
2. Quick page switching
3. Recent pages in sidebar
4. Breadcrumb navigation

## Visual Design

### Colors
- Primary: Midnight Blue (#0F172A)
- Secondary: Cool Gray (#64748B)
- Accent: Electric Blue (#3B82F6)
- Background: Pure White (#FFFFFF)
- Surface: Light Gray (#F8FAFC)

### Typography
- Headings: Inter
- Body: Inter
- Monospace: JetBrains Mono

### Spacing
- Consistent 4px grid system
- Comfortable reading width (720px max)
- Responsive padding and margins

### Animations
- Smooth block reordering
- Gentle hover states
- Subtle page transitions
- Cursor movements

## Phase 1 Implementation

Focus on core editing experience:
1. Basic document structure
2. Rich text editing
3. Block manipulation
4. Real-time saving
5. Document tree navigation

Future phases will add:
- Real-time collaboration
- Advanced block types
- Templates
- Mobile optimization
- Export/import