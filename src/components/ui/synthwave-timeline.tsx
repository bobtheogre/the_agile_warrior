import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function TimelineItem({ title, company, period, description }: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-12 last:pb-0">
      {/* Glowing dot */}
      <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-[#fc28a8] shadow-[0_0_8px_#fc28a8] z-10"></div>
      
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#fc28a8] to-[#03edf9]/50"></div>
      
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#ffcc00]">{company}</span>
            <span className="text-sm text-purple-300">{period}</span>
          </div>
        </div>
        <p className="text-purple-200">
          {description}
        </p>
      </div>
    </div>
  );
}

interface SynthwaveTimelineProps {
  items: TimelineItemProps[];
}

export function SynthwaveTimeline({ items }: SynthwaveTimelineProps) {
  return (
    <div className="mx-auto max-w-4xl mt-16 space-y-12 relative">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          company={item.company}
          period={item.period}
          description={item.description}
        />
      ))}
    </div>
  );
}
