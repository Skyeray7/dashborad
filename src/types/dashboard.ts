export type DashboardView = 'overview' | 'showcase' | 'timeline'

export type MetricTone = 'positive' | 'neutral' | 'attention'

export type Metric = {
  label: string
  value: string
  delta: string
  note: string
  tone: MetricTone
}

export type SignalPoint = {
  label: string
  value: number
}

export type SpotlightItem = {
  title: string
  category: string
  summary: string
  image: string
  status: string
  metric: string
}

export type TimelineEntry = {
  date: string
  title: string
  summary: string
  tag: string
}

export type ResourceItem = {
  title: string
  kind: string
  readiness: string
  owner: string
  summary: string
}

export type ChecklistItem = {
  title: string
  due: string
  status: string
}

export type QuickLink = {
  label: string
  value: string
  href: string
}

export type CollectionItem = {
  title: string
  caption: string
  image: string
  format: string
}

export type DashboardContent = {
  profile: {
    name: string
    description: string
    coverImage: string
    highlights: string[]
  }
  hero: {
    eyebrow: string
    focus: string
    description: string
    note: string
    tags: string[]
  }
  metrics: Metric[]
  signals: SignalPoint[]
  spotlight: SpotlightItem[]
  timeline: TimelineEntry[]
  resources: ResourceItem[]
  checklist: ChecklistItem[]
  quickLinks: QuickLink[]
  collections: CollectionItem[]
}
