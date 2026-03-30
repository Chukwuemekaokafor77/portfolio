'use client';

import { EDUCATION } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a Full-Stack Software Engineer and ML Engineer with a proven track record of shipping production systems
              that hold up under real-world load. My work spans multi-tenant SaaS platforms, machine learning pipelines,
              and data-intensive backends — always with a focus on correctness, performance, and clean architecture.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Most recently at <span className="text-violet-300 font-medium">Introhive Services Inc.</span> I cut API latency by
              32% and built zero-downtime Rails migrations serving production traffic daily. Before that at{' '}
              <span className="text-violet-300 font-medium">Themiscore</span> I reduced FastAPI endpoint latency by 40% and
              built RBAC middleware protecting sensitive legal documents across multi-tenant environments.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Outside of work I build ambitious side projects — an AI housing platform matching applicants to listings
              across all 13 Canadian provinces, a PIPEDA-compliant eldercare SaaS with GPS-verified shifts and Stripe
              billing, and multiple ML systems ranging from burn severity classification to real-time customer churn
              prediction with Prometheus observability.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I hold a PGD in <span className="text-white font-medium">Applied AI &amp; Machine Learning</span> from Conestoga College
              and an MSc in Information Technology. I write Python, TypeScript, and Ruby fluently, and I&apos;m
              comfortable across the entire stack — from raw SQL index design to React UIs to AWS SageMaker training jobs.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '10+', label: 'Projects Shipped' },
                { value: '5+', label: 'Years Experience' },
                { value: '40%', label: 'Avg Latency Reduction' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f0f1a] border border-[#1e1e35] rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — education */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f0f1a] border border-[#1e1e35] rounded-2xl p-5 hover:border-violet-800/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white font-semibold text-sm">{edu.degree}</p>
                      <p className="text-violet-300 text-sm mt-0.5">{edu.field}</p>
                      <p className="text-gray-500 text-xs mt-1">{edu.school}</p>
                    </div>
                    {edu.year && (
                      <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-violet-900/30 text-violet-300 border border-violet-800/30">
                        {edu.year}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Location / availability card */}
            <div className="mt-6 bg-gradient-to-br from-violet-900/20 to-indigo-900/10 border border-violet-800/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white font-semibold text-sm">Canada — Open to Remote &amp; Hybrid</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Based in Canada, available for full-time roles, contracts, and consulting engagements worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
