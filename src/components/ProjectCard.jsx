import { Github } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import ProjectShotSlider from './ProjectShotSlider';

export default function ProjectCard({ project }) {
  const tilt = useTilt(3);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="flex w-[85vw] max-w-[340px] flex-none scroll-ml-0 snap-start flex-col overflow-hidden rounded-[18px] border border-border bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,.15)] sm:w-[320px] lg:w-[350px]"
    >
      <ProjectShotSlider images={project.images} title={project.title} shotCount={project.shotCount} />

      <div className="flex flex-1 flex-col items-center gap-3 px-6 pb-5 pt-[26px] text-center">
        <h3 className="font-display text-[19px] font-extrabold">{project.title}</h3>
        <div className="flex flex-wrap justify-center gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-2xl border border-green/30 bg-green/10 px-3 py-[5px] text-[11px] font-bold text-green transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_-4px_rgba(30,41,86,.28)]"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="flex-1 text-[13.8px] leading-[1.65] text-text-mut">{project.description}</p>
      </div>

      <div className="flex items-center justify-between border-t border-border px-6 py-3.5">
        <span className="text-[12.5px] font-medium text-text-mut">{project.shotCount} captures</span>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full bg-text px-4 py-[9px] text-[12.5px] font-bold text-white transition hover:brightness-110 active:scale-[.97] dark:bg-black dark:hover:bg-primary"
        >
          <Github size={14} />
          Code
        </a>
      </div>
    </div>
  );
}
