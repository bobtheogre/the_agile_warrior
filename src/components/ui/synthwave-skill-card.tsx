import React from 'react';
import { SynthwaveCard, CardContent, CardHeader } from './synthwave-card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SynthwaveSkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="group">
      <SynthwaveCard className="h-full transition-all duration-500 group-hover:translate-y-[-5px]">
        <CardHeader 
          title={title}
          titleTypographyProps={{ 
            className: 'text-white font-bold text-xl'
          }}
          avatar={
            <div className="text-[#03edf9] group-hover:text-[#fc28a8] transition-colors duration-300">
              {icon}
            </div>
          }
          className="pb-0"
        />
        <CardContent>
          <p className="text-purple-200">{description}</p>
        </CardContent>
      </SynthwaveCard>
    </div>
  );
}

interface SynthwaveSkillsGridProps {
  skills: SkillCardProps[];
}

export function SynthwaveSkillsGrid({ skills }: SynthwaveSkillsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <SynthwaveSkillCard
          key={index}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </div>
  );
}
