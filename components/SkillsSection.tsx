'use client';

import { SKILL_GROUPS } from '@/lib/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">Technical Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Skills &amp; Technologies</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A battle-tested toolkit built across SaaS products, ML systems, and high-traffic backends.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="bg-[#0f0f1a] border border-[#1e1e35] rounded-2xl p-6 hover:border-violet-800/50 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-300"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl leading-none" role="img" aria-label={group.label}>
                  {group.icon}
                </span>
                <h3 className="text-white font-bold text-sm tracking-wide">{group.label}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-violet-700/40 hover:text-white transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
