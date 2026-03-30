'use client';

import { EXPERIENCE } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Experience</h2>
          <p className="text-gray-500 max-w-xl">
            Building production systems and leading technical initiatives across SaaS, legal tech, and academia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px border-l border-violet-900/50" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-24">
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-600 ring-4 ring-violet-900/40 ring-offset-0" />

                <div className="bg-[#0f0f1a] border border-[#1e1e35] rounded-2xl p-6 hover:border-violet-800/50 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-white font-bold text-lg">{exp.company}</h3>
                        {exp.current && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-900/30 text-green-400 border border-green-800/40">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="gradient-text font-semibold text-sm">{exp.role}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-violet-900/30 text-violet-300 border border-violet-800/30 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-400">
                        <svg
                          className="w-4 h-4 text-violet-500 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
