interface Track {
  title: string
  description: string
  tools: string[]
  projects: string[]
}

interface ToolsSectionProps {
  tracks: Track[]
}

export function ToolsSection({ tracks }: ToolsSectionProps) {
  // Collect all unique tools from all tracks
  const allTools = Array.from(new Set(tracks.flatMap((track) => track.tools)))

  // Icon mapping: tool name to SVG JSX
  const toolIcons: Record<string, React.ReactNode> = {
    Excel: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#217346" rx="2" />
        <path
          d="M4 4h16v16H4z"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
        />
        <path
          d="M6 8l3 4h8l-3-4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 16l4-2h6l-4 2"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    SQL: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#0078d4" />
        <path d="M4 7h16M4 11h16M4 15h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="9" r="1" fill="white" />
        <circle cx="12" cy="9" r="1" fill="white" />
        <circle cx="18" cy="9" r="1" fill="white" />
      </svg>
    ),
    "Power BI": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#f2c811" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="#7a5100" strokeWidth="1" />
        <rect x="8" y="8" width="3" height="3" fill="#ffb900" rx="0.5" />
        <rect x="13" y="8" width="3" height="5" fill="#ff8c00" rx="0.5" />
        <circle cx="12" cy="18" r="1.5" fill="#d13438" />
        <path d="M11 16h2v2h-2z" fill="#d13438" />
      </svg>
    ),
    Tableau: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0054a6" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="1" />
        <rect x="8" y="9" width="2" height="2" fill="white" rx="0.5" />
        <rect x="12" y="9" width="2" height="4" fill="white" rx="0.5" />
        <rect x="8" y="14" width="6" height="2" fill="white" rx="0.5" />
        <path d="M16 13h2v3h-2z" fill="white" />
      </svg>
    ),
    Python: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#3776ab"
        />
        <path
          d="M10 14.5l-3-3 1.41-1.41L10 12.17l4.59-4.59L17 8l-7 7z"
          fill="white"
        />
        <circle cx="12" cy="12" r="2" fill="#ffd93d" stroke="#ff6b6b" strokeWidth="1" />
      </svg>
    ),
    "Machine Learning": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#4caf50" stroke="#388e3c" strokeWidth="1" />
        <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="8" r="1" fill="white" />
        <circle cx="16" cy="8" r="1" fill="white" />
        <circle cx="8" cy="16" r="1" fill="white" />
        <circle cx="16" cy="16" r="1" fill="white" />
        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    Statistics: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#9c27b0" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="1" />
        <rect x="8" y="8" width="2" height="2" fill="white" />
        <rect x="12" y="8" width="2" height="4" fill="white" />
        <rect x="16" y="8" width="2" height="2" fill="white" />
        <path d="M10 12h4M14 12v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "AI tools": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#ff6b6b" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill="#ffd93d"
        />
        <path d="M12 8v8M8 12h8" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Forecasting: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#00bcd4" rx="2" />
        <rect x="5" y="5" width="14" height="14" fill="none" stroke="#0097a7" strokeWidth="1" />
        <path
          d="M8 10l2 2 3-1 3 4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="9" cy="11" r="1" fill="white" />
        <circle cx="13" cy="13" r="1" fill="white" />
        <circle cx="17" cy="17" r="1" fill="white" />
      </svg>
    ),
    KPIs: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ff9800" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="9" cy="9" r="1.5" fill="white" />
        <rect x="12" y="8" width="3" height="1" fill="white" rx="0.5" />
        <rect x="12" y="12" width="3" height="1" fill="white" rx="0.5" />
        <rect x="12" y="16" width="3" height="1" fill="white" rx="0.5" />
        <path d="M10 18h6" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    "automated reporting": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#795548" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="1" />
        <rect x="8" y="8" width="4" height="4" fill="white" rx="1" />
        <path
          d="M14 12h4M12 14v4M16 16h2M18 18v2"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="18" r="1" fill="white" />
      </svg>
    ),
    "metrics visualization": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#e91e63" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="1" />
        <polyline points="8,18 11,14 14,16 18,10" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="9" cy="17" r="0.5" fill="white" />
        <circle cx="12" cy="13" r="0.5" fill="white" />
        <circle cx="15" cy="15" r="0.5" fill="white" />
        <circle cx="19" cy="9" r="0.5" fill="white" />
      </svg>
    ),
    Figma: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0acf83" rx="2" />
        <circle cx="12" cy="6" r="3" fill="#a259ff" />
        <circle cx="12" cy="12" r="3" fill="#f24e1e" />
        <circle cx="12" cy="18" r="3" fill="#ff7262" />
        <circle cx="18" cy="12" r="3" fill="#1abcfe" />
        <circle cx="18" cy="18" r="3" fill="#2ecc71" />
      </svg>
    ),
    "Adobe XD": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#470137" rx="2" />
        <path
          d="M8 8l4 10h2l4-10M10 12h4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    Sketch: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#f7b500" rx="2" />
        <path
          d="M12 4l8 8-8 8-8-8z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    ),
    Principle: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ea4c89" rx="2" />
        <path
          d="M8 8h8v8H8z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" fill="white" />
        <path d="M10 12h4M12 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    InVision: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#d81b60" rx="2" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="2" />
        <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "User research": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0288d1" rx="2" />
        <path
          d="M12 6a6 6 0 100 12 6 6 0 000-12z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" fill="white" />
        <path d="M14 14l2 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Wireframing: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#455a64" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="2" />
        <rect x="8" y="8" width="2" height="2" fill="white" />
        <rect x="12" y="8" width="4" height="2" fill="white" />
        <rect x="8" y="12" width="8" height="4" fill="white" />
      </svg>
    ),
    Prototyping: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#8e24aa" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="2" />
        <path d="M8 8h8v8H8z" fill="white" fillOpacity="0.5" />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    ),
    "Usability testing": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#1976d2" rx="2" />
        <path
          d="M12 4l8 8-8 8-8-8z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M10 12h4M12 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Adobe Creative Suite": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ff0000" rx="2" />
        <path
          d="M8 8l4 10h2l4-10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M10 12h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Branding: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#4db6ac" rx="2" />
        <circle cx="12" cy="12" r="6" fill="white" />
        <path d="M12 8v8M8 12h8" stroke="#4db6ac" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Typography: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#212121" rx="2" />
        <path
          d="M8 6h8M10 6v12M14 6v12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    "Color theory": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#f06292" rx="2" />
        <circle cx="8" cy="8" r="3" fill="#2196f3" />
        <circle cx="16" cy="8" r="3" fill="#ffeb3b" />
        <circle cx="12" cy="16" r="3" fill="#f44336" />
      </svg>
    ),
    "Component libraries": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#78909c" rx="2" />
        <rect x="6" y="6" width="4" height="4" fill="white" rx="1" />
        <rect x="12" y="6" width="4" height="4" fill="white" rx="1" />
        <rect x="6" y="12" width="4" height="4" fill="white" rx="1" />
        <rect x="12" y="12" width="4" height="4" fill="white" rx="1" />
      </svg>
    ),
    "Design tokens": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#546e7a" rx="2" />
        <circle cx="8" cy="8" r="2" fill="white" />
        <circle cx="16" cy="8" r="2" fill="white" />
        <circle cx="8" cy="16" r="2" fill="white" />
        <circle cx="16" cy="16" r="2" fill="white" />
      </svg>
    ),
    Documentation: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#37474f" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="2" />
        <path d="M8 8h8M8 12h8M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Collaboration tools": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#26a69a" rx="2" />
        <circle cx="8" cy="8" r="2" fill="white" />
        <circle cx="16" cy="8" r="2" fill="white" />
        <circle cx="12" cy="16" r="2" fill="white" />
        <path d="M8 10v4h4M12 14h4v-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    HTML: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#e34f26" rx="2" />
        <path
          d="M6 6h12v12H6z"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path d="M8 8l2 8h4l2-8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    CSS: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#1572b6" rx="2" />
        <path
          d="M6 6h12v12H6z"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path d="M8 8h4v4h4v4h-4v-4h-4z" fill="white" />
      </svg>
    ),
    JavaScript: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#f7df1e" rx="2" />
        <path
          d="M8 8c0 4 2 6 4 6s4-2 4-6M8 16c0-4 2-6 4-6"
          stroke="#323330"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    "Tailwind CSS": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#38bdf8" rx="2" />
        <path
          d="M6 12q2-4 6-4t6 4q-2 4-6 4t-6-4"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    MUI: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#007fff" rx="2" />
        <path
          d="M6 6l6 12 6-12H6z"
          fill="white"
          stroke="white"
          strokeWidth="1"
        />
        <path d="M9 12h6" stroke="#007fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    React: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#61dafb" rx="2" />
        <circle cx="12" cy="12" r="2" fill="white" />
        <path
          d="M12 4c4 0 7 2 7 8s-3 8-7 8M12 4c-4 0-7 2-7 8s3 8 7 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    "Next.js": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#000000" rx="2" />
        <circle cx="12" cy="12" r="6" fill="white" />
        <path d="M10 12h4v4h-4z" fill="#000000" />
        <path d="M14 12v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Node.js (Express)": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#68a063" rx="2" />
        <path
          d="M12 4l8 8-8 8-8-8z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Python (Django)": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#092e20" rx="2" />
        <path
          d="M8 6v12M12 6v12M16 6v12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    "PHP (Laravel)": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ff2d20" rx="2" />
        <path
          d="M8 8l4 10h2l4-10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M10 12h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    NestJS: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#e0234e" rx="2" />
        <path
          d="M12 6l6 6-6 6-6-6z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M10 12h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    GoLang: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#00add8" rx="2" />
        <path
          d="M6 8h12M6 12h12M6 16h12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    "Flutter & Dart": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#42a5f5" rx="2" />
        <path
          d="M6 6l12 12M6 18l12-12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    "React Native": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#61dafb" rx="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2" />
        <path
          d="M12 4c4 0 7 2 7 8s-3 8-7 8M12 4c-4 0-7 2-7 8s3 8 7 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    AWS: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ff9900" rx="2" />
        <path
          d="M6 6h12v12H6z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Azure: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0078d4" rx="2" />
        <path
          d="M6 6l12 12M6 18l6-12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    "DevOps pipelines": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#607d8b" rx="2" />
        <path
          d="M6 12h12M8 8h8M8 16h8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="6" cy="12" r="2" fill="white" />
        <circle cx="18" cy="12" r="2" fill="white" />
      </svg>
    ),
    Docker: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0db7ed" rx="2" />
        <rect x="6" y="10" width="4" height="4" fill="white" rx="1" />
        <rect x="10" y="10" width="4" height="4" fill="white" rx="1" />
        <rect x="14" y="10" width="4" height="4" fill="white" rx="1" />
        <path d="M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Video editing": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ffca28" rx="2" />
        <path
          d="M6 6h12v12H6z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M8 8l8 4-8 4z" fill="white" />
      </svg>
    ),
    Podcasting: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#d81b60" rx="2" />
        <circle cx="12" cy="12" r="4" fill="white" />
        <path d="M12 16v4M10 18h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Blogging: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#4fc3f7" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="2" />
        <path d="M8 8h8M8 12h8M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Short-form storytelling": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ab47bc" rx="2" />
        <path
          d="M6 6h12v12H6z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M8 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    "Social media strategy": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#3f51b5" rx="2" />
        <circle cx="12" cy="12" r="4" fill="white" />
        <path d="M8 8h8v8h-8z" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    ),
    SEO: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#2196f3" rx="2" />
        <path
          d="M12 6a6 6 0 100 12 6 6 0 000-12z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M14 14l2 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Media Buying (Meta, TikTok, Google)": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#ff5722" rx="2" />
        <path
          d="M6 6h12v12H6z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Email automation": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#4caf50" rx="2" />
        <rect x="6" y="6" width="12" height="12" fill="none" stroke="white" strokeWidth="2" />
        <path d="M6 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    "Funnel design": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#f06292" rx="2" />
        <path
          d="M6 6h12v4H6zM8 10h8v4H8zM10 14h6v4h-6z"
          fill="white"
        />
      </svg>
    ),
    "A/B testing": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0288d1" rx="2" />
        <path
          d="M6 6h6v12H6zM12 6h6v12h-6z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M9 12h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Retention strategies": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#7b1fa2" rx="2" />
        <path
          d="M12 4a8 8 0 100 16 8 8 0 000-16z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Market research": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#d81b60" rx="2" />
        <path
          d="M12 6a6 6 0 100 12 6 6 0 000-12z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M14 14l2 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Positioning: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#388e3c" rx="2" />
        <path
          d="M12 4l8 8-8 8-8-8z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    ),
    "Go-to-market strategy": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#0288d1" rx="2" />
        <path
          d="M6 12h12M8 8h8M8 16h8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="6" cy="12" r="2" fill="white" />
        <circle cx="18" cy="12" r="2" fill="white" />
      </svg>
    ),
    "Customer insights": (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#f06292" rx="2" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="2" />
        <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Tools & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the industry-standard tools and technologies that employers are looking for
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {allTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center text-secondary">
                {toolIcons[tool] || <span className="font-bold text-sm">{tool.charAt(0).toUpperCase()}</span>}
              </div>
              <span className="font-medium text-card-foreground">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
