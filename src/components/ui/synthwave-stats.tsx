import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg border border-purple-700/50 
                  bg-gradient-to-br from-gray-900 to-purple-950 
                  hover:shadow-[0_0_15px_rgba(3,237,249,0.5)] transition-all duration-300">
      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc28a8] to-[#03edf9]">
        {value}
      </span>
      <span className="text-sm text-purple-200 mt-2">{label}</span>
    </div>
  );
}

interface SynthwaveStatsProps {
  items: StatItemProps[];
}

export function SynthwaveStats({ items }: SynthwaveStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {items.map((item, index) => (
        <StatItem
          key={index}
          value={item.value}
          label={item.label}
        />
      ))}
    </div>
  );
}
