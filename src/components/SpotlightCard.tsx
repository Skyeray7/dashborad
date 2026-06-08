import type { SpotlightItem } from '../types/dashboard'

type SpotlightCardProps = {
  item: SpotlightItem
}

export function SpotlightCard({ item }: SpotlightCardProps) {
  return (
    <article className="spotlight-card">
      <div className="spotlight-image-wrap">
        <img className="spotlight-image" src={item.image} alt={item.title} />
      </div>
      <div className="spotlight-body">
        <div className="spotlight-meta">
          <span>{item.category}</span>
          <strong>{item.status}</strong>
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div className="spotlight-footer">{item.metric}</div>
      </div>
    </article>
  )
}
