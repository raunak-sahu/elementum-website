function ZigzagUnderline({ width = "180" }) {
  return (
    <div className="mt-2">
      <svg width={width} height="24" viewBox="0 0 180 24">
        {/* Stroke 1 */}
        <path
          d="M2 8 C40 2 90 14 178 6"
          stroke="#F7D046"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Stroke 2 */}
        <path
          d="M4 14 C50 8 120 20 176 12"
          stroke="#F7D046"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Stroke 3 */}
        <path
          d="M6 20 C60 14 130 24 170 18"
          stroke="#F7D046"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

export default ZigzagUnderline;