function Bubbles({ count = 10, className = '' }) {
  const bubbles = Array.from({ length: count }, (_, index) => ({
    id: index,
    size: 10 + ((index * 7) % 18),
    left: (index * 11) % 100,
    duration: 8 + (index % 6),
    delay: (index % 5) * 0.8,
    opacity: 0.18 + (index % 4) * 0.12,
  }))

  return (
    <div className={`bubbles ${className}`.trim()} aria-hidden="true">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles
