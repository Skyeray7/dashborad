import type { DashboardContent } from '../types/dashboard'

export const dashboardContent: DashboardContent = {
  profile: {
    name: 'Showroom Dashboard',
    description:
      '一个面向未来扩展的展示底座，适合继续挂项目案例、更新日志、活动素材和外部资源。',
    coverImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    highlights: ['可扩展 React 结构', 'GitHub Pages 自动部署', '展示内容集中管理'],
  },
  hero: {
    eyebrow: 'Front-end Foundation',
    focus: '先把发布中台搭稳，再往里持续填内容。',
    description:
      '当前版本优先解决结构、分区、可扩展性和部署链路，让这个仓库从第一天开始就是一个可长期维护的前端项目。',
    note: '后续只需要继续扩展数据、组件和内容模块，就能逐步长成你的正式展示站。',
    tags: ['Vite + React + TypeScript', 'Dashboard shell', 'GitHub Pages ready'],
  },
  metrics: [
    {
      label: '展示模块',
      value: '06',
      delta: '+3 planned',
      note: '概览、精选、时间线、资源、清单、合集',
      tone: 'positive',
    },
    {
      label: '部署链路',
      value: 'CI/CD',
      delta: 'Pages workflow',
      note: '推送到 main 后自动构建并发布',
      tone: 'neutral',
    },
    {
      label: '内容入口',
      value: '1 file',
      delta: 'centralized',
      note: '展示数据集中在单独的数据文件中维护',
      tone: 'positive',
    },
    {
      label: '下个阶段',
      value: 'Content',
      delta: 'ready to fill',
      note: '接下来可继续填项目、文章、视频、演示材料',
      tone: 'attention',
    },
  ],
  signals: [
    { label: '结构', value: 84 },
    { label: '样式', value: 72 },
    { label: '内容', value: 35 },
    { label: '发布', value: 92 },
  ],
  spotlight: [
    {
      title: '案例展示位',
      category: 'Project Highlights',
      summary: '用于放 2 到 6 个重点项目，支持封面图、摘要、状态和关键指标。',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      status: 'Ready for content',
      metric: '可做项目卡片、案例卡片或发布卡片',
    },
    {
      title: '更新节奏面板',
      category: 'Release Rhythm',
      summary: '把最近更新、发布时间线和后续排期放在一个连续的叙事区里。',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      status: 'Structured',
      metric: '适合维护更新日志、周报、活动进展',
    },
    {
      title: '资源与素材仓',
      category: 'Resource Library',
      summary: '沉淀讲稿、海报、文档、演示视频和外部链接，方便后续统一展示。',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      status: 'Expandable',
      metric: '后续可接 CMS、Notion 或 API',
    },
  ],
  timeline: [
    {
      date: 'Week 1',
      title: '完成工程底座',
      summary: 'Vite、React、TypeScript、GitHub Pages workflow 全部就位。',
      tag: 'Foundation',
    },
    {
      date: 'Week 2',
      title: '填充真实展示内容',
      summary: '补充你的项目、截图、介绍文案和对外展示的重点信息。',
      tag: 'Content',
    },
    {
      date: 'Week 3',
      title: '接入外部数据源',
      summary: '根据需要对接 JSON、CMS、Notion 或 GitHub 仓库中的数据文件。',
      tag: 'Integration',
    },
    {
      date: 'Week 4',
      title: '补交互与检索',
      summary: '增加筛选、搜索、标签分组或内容详情页，让展示站更像正式产品。',
      tag: 'Iteration',
    },
    {
      date: 'Later',
      title: '沉淀成长期展示站',
      summary: '逐步拓展成可以长期运营的项目门户、作品墙或团队更新看板。',
      tag: 'Scale',
    },
  ],
  resources: [
    {
      title: '项目案例区',
      kind: 'Module',
      readiness: 'Base ready',
      owner: 'Content',
      summary: '后续可继续拆成列表页、详情页、标签筛选和案例模板。',
    },
    {
      title: '媒体素材区',
      kind: 'Gallery',
      readiness: 'Slot ready',
      owner: 'Assets',
      summary: '适合挂封面图、活动照、海报、短视频封面或设计稿预览。',
    },
    {
      title: '发布日志区',
      kind: 'Timeline',
      readiness: 'Usable',
      owner: 'Updates',
      summary: '适合记录里程碑、版本变更、活动进展和对外发布节奏。',
    },
    {
      title: '外部链接区',
      kind: 'Link hub',
      readiness: 'Ready',
      owner: 'Operations',
      summary: '后续可接 GitHub、文档、演示稿、预约页或社媒入口。',
    },
  ],
  checklist: [
    { title: '补充真实项目内容', due: 'Next', status: 'Pending' },
    { title: '替换封面图与文案', due: 'Next', status: 'Pending' },
    { title: '推送到 GitHub 仓库', due: 'Soon', status: 'Pending' },
    { title: '启用 GitHub Pages', due: 'Soon', status: 'Pending' },
  ],
  quickLinks: [
    { label: '概览视图', value: 'Overview', href: '#overview' },
    { label: '精选展示', value: 'Showcase', href: '#showcase' },
    { label: '更新节奏', value: 'Timeline', href: '#timeline' },
    { label: '资源模块', value: 'Assets', href: '#assets' },
  ],
  collections: [
    {
      title: '案例合集',
      caption: '用于沉淀你最值得展示的一组项目。',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      format: 'Case studies',
    },
    {
      title: '活动与更新',
      caption: '适合放近期发布、活动日历和阶段性里程碑。',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      format: 'Timeline feed',
    },
    {
      title: '资源导航',
      caption: '适合挂文档、下载、演示链接和联系入口。',
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
      format: 'Resource hub',
    },
  ],
}
