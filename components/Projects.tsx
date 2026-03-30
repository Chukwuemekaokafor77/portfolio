'use client';

import { useState } from 'react';
import { PROJECTS, ProjectCategory } from '@/lib/data';
import ProjectCard from './ProjectCard';

type Filter = { label: string; value: ProjectCategory | 'all' };

const FILTERS: Filter[] = [
  { label: 'All', value: 'all' },
  { label: 'SaaS / Web', value: 'saas' },
  { label: 'ML & AI', value: 'ml' },
  { label: 'Data', value: 'data' },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">What I&apos;ve Built</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Projects</h2>
          <p className="text-gray-500 max-w-xl">
            Production systems, ML pipelines, and full-stack applications — built to ship and built to scale.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value as ProjectCategory | 'all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f.value
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-900/30'
                  : 'border border-[#1e1e35] text-gray-400 hover:text-white hover:border-violet-700/50 bg-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-600">
            Showing <span className="text-gray-400 font-medium">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
