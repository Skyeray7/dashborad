import type { SignalPoint } from '../types/dashboard'

type SignalChartProps = {
  points: SignalPoint[]
}

export function SignalChart({ points }: SignalChartProps) {
  return (
    <div className="signal-card">
      <div className="signal-header">
        <span>Build Momentum</span>
        <strong>Current readiness</strong>
      </div>
      <div className="signal-chart" aria-label="Build momentum chart">
        {points.map((point) => (
          <div className="signal-column" key={point.label}>
            <div
              className="signal-bar"
              style={{ height: `${Math.max(point.value, 18)}%` }}
            >
              <span>{point.value}</span>
            </div>
            <p>{point.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
