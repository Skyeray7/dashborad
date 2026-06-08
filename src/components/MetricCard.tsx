import type { Metric } from '../types/dashboard'

type MetricCardProps = {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className={`metric-card metric-card--${metric.tone}`}>
      <div className="metric-header">
        <span>{metric.label}</span>
        <strong>{metric.delta}</strong>
      </div>
      <p className="metric-value">{metric.value}</p>
      <p className="metric-note">{metric.note}</p>
    </article>
  )
}
