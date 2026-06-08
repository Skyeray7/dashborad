type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
