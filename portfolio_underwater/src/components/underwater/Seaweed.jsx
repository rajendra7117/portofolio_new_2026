function Seaweed({ variant = 'a', className = '' }) {
  const leaves = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    left: 15 + index * 14,
    height: 60 + index * 15,
    delay: index * 0.5,
    transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(7deg)',
  }))

  return (
    <div className={`seaweed seaweed-${variant} ${className}`.trim()} aria-hidden="true">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="seaweed-plant"
          style={{
            left: `${leaf.left}%`,
            height: `${leaf.height}px`,
            animationDelay: `${leaf.delay}s`,
            transform: leaf.transform,
          }}
        >
          <i />
          <i />
          <i />
        </span>
      ))}
    </div>
  )
}

export default Seaweed
