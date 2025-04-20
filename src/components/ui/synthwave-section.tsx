import React from 'react';

interface SynthwaveSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export function SynthwaveSection({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  isDark = false
}: SynthwaveSectionProps) {
  return (
    <section 
      id={id} 
      className={`
        w-full py-16 md:py-24 relative overflow-hidden
        ${isDark ? 'bg-gradient-to-b from-gray-900 to-purple-950' : 'bg-gradient-to-b from-gray-900/90 to-purple-950/90'}
        ${className}
      `}
    >
      {/* Synthwave grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fc28a8] to-[#03edf9]">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-[800px] text-purple-100 md:text-lg mt-2">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
