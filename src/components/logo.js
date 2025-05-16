const logoSVG = (
    <svg width="90" height="90" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="whitesmoke" strokeWidth="4" />
      <text x="20" y="25" textAnchor="middle" fontSize="16" fill="whitesmoke">CP</text>
    </svg>
  );

export default function Logo() {
    return (
        <div className="ml-4 mt-4 mb-4">
            {logoSVG}
        </div>
    )
}