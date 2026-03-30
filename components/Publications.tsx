'use client';

import { PUBLICATIONS } from '@/lib/data';

export default function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Research
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Publications
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Peer-reviewed research across AI systems, machine learning, and applied computing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PUBLICATIONS.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0f0f1a] border border-[#1e1e35] rounded-2xl p-6 hover:border-violet-700/50 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-300"
            >
              {/* Journal + date */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs text-violet-400 font-medium truncate">
                  {pub.journal}
                </span>
                <span className="text-xs text-gray-500 shrink-0">{pub.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-violet-300 transition-colors">
                {pub.title}
              </h3>

              {/* Abstract */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {pub.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs bg-violet-900/30 text-violet-300 border border-violet-800/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read link */}
              <div className="flex items-center gap-1.5 text-xs text-violet-400 group-hover:text-violet-300 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Read Paper
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
