import { Project } from '@/lib/data';

const categoryColors: Record<string, string> = {
  saas: 'text-violet-300 bg-violet-900/25 border-violet-700/40',
  ml: 'text-cyan-300 bg-cyan-900/20 border-cyan-700/30',
  data: 'text-emerald-300 bg-emerald-900/20 border-emerald-700/30',
};

const categoryLabel: Record<string, string> = {
  saas: 'SaaS / Web',
  ml: 'ML & AI',
  data: 'Data',
};

// GitHub icon SVG
function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// External link icon SVG
function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.github !== null || project.live !== null;
  const tagColor = categoryColors[project.category] ?? 'text-gray-400 bg-white/5 border-white/10';

  return (
    <div className="flex flex-col h-full bg-[#0f0f1a] border border-[#1e1e35] rounded-2xl p-6 hover:border-violet-700/40 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-300 group">
      {/* Category badge + tags row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${tagColor}`}
        >
          {categoryLabel[project.category] ?? project.category}
        </span>
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-500 font-medium">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-[10px] text-gray-600">+{project.tags.length - 3}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-violet-200 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-6">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
            <svg
              className="w-3.5 h-3.5 text-violet-500 mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {h}
          </li>
        ))}
      </ul>

      {/* Footer buttons */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
        {hasLinks ? (
          <>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                <GitHubIcon />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-violet-600/20 border border-violet-600/30 text-violet-300 hover:bg-violet-600/30 hover:text-white transition-all duration-200"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
            {project.github === null && project.live !== null && null}
          </>
        ) : (
          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Private Project
          </span>
        )}
      </div>
    </div>
  );
}
