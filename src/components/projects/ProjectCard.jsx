import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

function ProjectCard({ project }) {
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-rose-200/80 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(159,18,57,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-rose-200/60 hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)]">

            {/* Top Subtle Ambient Light Glow on Hover */}
            <div className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#E11D48] to-[#BE185D] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[8%] pointer-events-none z-0"></div>

            {/* Premium Wrapped Image Container */}
            <div className="relative overflow-hidden p-4 pb-0 z-10">
                <div className="relative overflow-hidden rounded-2xl border border-rose-100/50 aspect-video bg-stone-50">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                    {/* Soft dark overlay that lifts on hover */}
                    <div className="absolute inset-0 bg-stone-900/5 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-1 flex-col p-6 z-10">
                {/* Title */}
                <h3 className="mb-3 text-lg sm:text-xl font-bold text-stone-900 tracking-tight transition-colors duration-300 group-hover:text-rose-950">
                    {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="mb-5 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                    {project.shortDescription}
                </p>

                {/* Technologies Grid */}
                <div className="mb-auto flex flex-wrap gap-1.5 pb-6">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-rose-100/60 bg-rose-50/50 px-2.5 py-0.5 text-[11px] sm:text-sm font-semibold text-rose-800/90 tracking-wide transition-colors duration-300 hover:bg-rose-100/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons Footer */}
                <div className="pt-4 border-t border-rose-200/50 flex items-center justify-between mt-auto">
                    {/* View Details Link */}

                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-700 hover:text-rose-950 transition-colors duration-300 group/link"
                    >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>

                    {/* External Icon Actions */}
                    <div className="flex items-center gap-1.5">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub Repository"
                                className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-rose-50 transition-all duration-300 hover:scale-105"
                                aria-label={`${project.title} GitHub Repository`}
                            >
                                <GithubIcon className="w-4.5 h-4.5" />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Live Demo"
                                className="p-2 rounded-xl text-stone-500 hover:text-rose-700 hover:bg-rose-50 transition-all duration-300 hover:scale-105"
                                aria-label={`${project.title} Live Demo`}
                            >
                                <ExternalLink className="w-4.5 h-4.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
