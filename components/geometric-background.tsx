export default function GeometricBackground() {
  return (
    <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden" style={{ backgroundColor: 'var(--near-black)' }}>
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0">
        {/* Gradient Circles */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-30 blur-3xl" 
          style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-32 right-32 w-80 h-80 rounded-full opacity-25 blur-3xl" 
          style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-20 blur-2xl" 
          style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
        />
        
        {/* Geometric Shapes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="burgundyGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--burgundy)', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: 'var(--gold)', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <polygon points="100,50 200,150 150,250" fill="url(#burgundyGold)" opacity="0.3"/>
          <polygon points="400,200 500,100 600,200 500,300" fill="url(#burgundyGold)" opacity="0.25"/>
          <circle cx="150" cy="400" r="80" fill="url(#burgundyGold)" opacity="0.2"/>
          <polygon points="500,500 600,550 550,650" fill="url(#burgundyGold)" opacity="0.3"/>
          <rect x="250" y="100" width="120" height="120" fill="url(#burgundyGold)" opacity="0.2" transform="rotate(45 310 160)"/>
        </svg>
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <div className="w-10 h-10 flex items-center justify-center text-2xl font-semibold" style={{ color: 'var(--gold)' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L25 15H15L20 5Z" fill="var(--gold)"/>
            <circle cx="20" cy="25" r="10" stroke="var(--gold)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
