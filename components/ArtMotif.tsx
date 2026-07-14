type MotifProps = {
  className?: string;
};

/**
 * Concentric dotted rings referencing the "meeting place" symbol.
 * Renders in currentColor — set colour and opacity via className.
 */
export function MeetingRings({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[90, 72, 54, 36, 18].map((radius) => (
        <circle
          key={radius}
          cx="100"
          cy="100"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="0.1 9"
        />
      ))}
      <circle cx="100" cy="100" r="4" fill="currentColor" />
    </svg>
  );
}

/**
 * A short journey line of dots in the brand's black, red and yellow.
 * The neutral dots use currentColor so the line adapts to dark or light sections.
 */
export function JourneyDots({ className }: MotifProps) {
  const colors = ["currentColor", "#b91c1c", "#facc15"];
  return (
    <svg viewBox="0 0 128 8" aria-hidden="true" className={className}>
      {Array.from({ length: 16 }).map((_, i) => (
        <circle
          key={i}
          cx={4 + i * 8}
          cy="4"
          r={i % 4 === 1 ? 2.6 : 1.5}
          fill={colors[i % 3]}
        />
      ))}
    </svg>
  );
}
