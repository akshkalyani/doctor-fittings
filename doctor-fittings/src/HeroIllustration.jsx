export const HeroIllustration = () => {
  {
    /* Hero illustration */
  }
  <div className="hidden md:block rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#2d3a7a] to-[#1a2560]">
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="480" height="360" fill="#1a2560" />
      <rect
        x="0"
        y="260"
        width="480"
        height="100"
        fill="#1e2a6a"
        opacity="0.7"
      />
      {[20, 120, 220, 320].map((x, i) => (
        <g key={i}>
          <rect
            x={x}
            y="30"
            width="90"
            height="240"
            rx="3"
            fill="#2a3680"
            stroke="#3a4890"
            strokeWidth="1"
          />
          <rect
            x={x + 10}
            y="40"
            width="70"
            height="105"
            rx="2"
            fill="#263070"
            opacity="0.6"
          />
          <rect
            x={x + 10}
            y="155"
            width="70"
            height="105"
            rx="2"
            fill="#263070"
            opacity="0.6"
          />
        </g>
      ))}
      <rect
        x="420"
        y="30"
        width="50"
        height="240"
        rx="3"
        fill="#2a3680"
        stroke="#3a4890"
        strokeWidth="1"
      />
      <ellipse cx="160" cy="10" rx="18" ry="6" fill="#f5a623" opacity="0.7" />
      <line
        x1="160"
        y1="16"
        x2="160"
        y2="60"
        stroke="#f5a623"
        strokeWidth="1"
        opacity="0.3"
      />
      <ellipse cx="300" cy="10" rx="18" ry="6" fill="#f5a623" opacity="0.7" />
      <line
        x1="300"
        y1="16"
        x2="300"
        y2="60"
        stroke="#f5a623"
        strokeWidth="1"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#263070" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1a2560" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="0" y="270" width="480" height="90" fill="url(#floorGrad)" />
      <rect x="60" y="220" width="160" height="50" rx="4" fill="#1e2860" />
      <rect x="80" y="200" width="40" height="22" rx="3" fill="#222f75" />
      <rect x="135" y="205" width="65" height="17" rx="3" fill="#222f75" />
    </svg>
  </div>;
};
