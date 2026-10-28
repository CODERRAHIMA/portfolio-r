import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Lightbulb,
    Sparkles,
} from "lucide-react";
import { projectData } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
    return projectData.projects.map(({ slug }) => ({ slug }));
}

export default function ProjectDetailsPage({ params }) {
    return (
        <Suspense
            fallback={
                <>
                    <Navbar />
                    <main className="flex min-h-screen items-center justify-center px-4 pt-28 text-slate-600">
                        <p className="rounded-full border border-rose-200 bg-white/70 px-5 py-3 text-sm font-medium shadow-sm">
                            Loading project details...
                        </p>
                    </main>
                    <Footer />
                </>
            }
        >
            <ProjectDetails params={params} />
        </Suspense>
    );
}

async function ProjectDetails({ params }) {
    const { slug } = await params;
    const project = projectData.projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen px-4 pb-20 pt-28 text-slate-700 sm:px-6 sm:pt-32 lg:px-8">
                <article className="mx-auto max-w-5xl">
                    <Link
                        href="/#portfolio"
                        className="group mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/70 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-800 shadow-sm transition hover:-translate-x-1 hover:bg-rose-40"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                        Back to projects
                    </Link>

                    <header className="mb-10 text-center">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-rose-800">
                            <Sparkles className="h-3.5 w-3.5" />
                            {project.category}
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E1B1D] sm:text-4xl">
                            {project.title}
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-md">
                            {project.subtitle}
                        </p>
                    </header>

                    <div className="relative mb-10 overflow-hidden rounded-3xl border border-rose-200/80 bg-white/70 p-2 shadow-[0_20px_60px_rgba(159,18,57,0.10)] sm:p-3">
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-rose-50">
                            <Image
                                src={project.image}
                                alt={`${project.title} project preview`}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 1024px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_rgba(225,29,72,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(225,29,72,0.26)]"
                            >
                                View live project
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-6 py-3 text-xs sm:text-sm font-bold text-rose-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-50"
                            >
                                <Code2 className="h-4 w-4" />
                                Source code
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        )}
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(250px,0.8fr)]">
                        <div className="space-y-6">
                            <section className="rounded-3xl border border-rose-200/70 bg-white/70 p-6 shadow-[0_8px_32px_rgba(159,18,57,0.04)] backdrop-blur-xl sm:p-8">
                                <h2 className="mb-4 text-xl font-bold text-[#9F1239] sm:text-2xl">
                                    About the project
                                </h2>
                                <p className="leading-7 text-slate-600">{project.fullOverview}</p>
                            </section>

                            {project.keyFeatures?.length > 0 && (
                                <section className="rounded-3xl border border-rose-200/70 bg-white/70 p-6 shadow-[0_8px_32px_rgba(159,18,57,0.04)] backdrop-blur-xl sm:p-8">
                                    <h2 className="mb-5 text-xl font-bold text-[#9F1239] sm:text-2xl">
                                        Key features
                                    </h2>
                                    <ul className="space-y-4">
                                        {project.keyFeatures.map((feature) => (
                                            <li key={feature} className="flex gap-3 leading-7 text-slate-600">
                                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-rose-600" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {project.technicalHighlights?.length > 0 && (
                                <section className="rounded-3xl border border-rose-200/70 bg-white/70 p-6 shadow-[0_8px_32px_rgba(159,18,57,0.04)] backdrop-blur-xl sm:p-8">
                                    <h2 className="mb-5 text-xl font-bold text-[#9F1239] sm:text-2xl">
                                        Technical highlights
                                    </h2>
                                    <ul className="space-y-4">
                                        {project.technicalHighlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="border-l-2 border-rose-300 pl-4 leading-7 text-slate-600"
                                            >
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {project.challenges?.length > 0 && (
                                <section className="rounded-3xl border border-rose-200/70 bg-white/70 p-6 shadow-[0_8px_32px_rgba(159,18,57,0.04)] backdrop-blur-xl sm:p-8">
                                    <h2 className="mb-5 text-xl font-bold text-[#9F1239] sm:text-2xl">
                                        Challenges &amp; solutions
                                    </h2>
                                    <div className="space-y-6">
                                        {project.challenges.map(({ problem, solution }) => (
                                            <div key={problem} className="space-y-2">
                                                <h3 className="font-semibold text-slate-800">{problem}</h3>
                                                <p className="leading-7 text-slate-600">{solution}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* right side */}
                        <aside className="space-y-6">
                            <section className="rounded-3xl border border-rose-200/70 bg-white/70 p-6 shadow-[0_8px_32px_rgba(159,18,57,0.04)] backdrop-blur-xl">
                                <h2 className="mb-5 text-lg font-bold text-[#9F1239]">
                                    Built with
                                </h2>
                                <ul className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-full border border-rose-100 bg-rose-50/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-rose-800"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {project.futureImprovements?.length > 0 && (
                                <section className="rounded-3xl border border-rose-200/70 bg-white/70 p-6 shadow-[0_8px_32px_rgba(159,18,57,0.04)] backdrop-blur-xl">
                                    <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#9F1239]">
                                        <Lightbulb className="h-5 w-5" />
                                        What&apos;s next
                                    </h2>
                                    <ul className="space-y-4">
                                        {project.futureImprovements.map((improvement) => (
                                            <li
                                                key={improvement}
                                                className="border-l-2 border-rose-200 pl-3 text-sm leading-6 text-slate-600"
                                            >
                                                {improvement}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </aside>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/#portfolio"
                            className="inline-flex items-center gap-2 text-sm font-bold text-rose-800 transition hover:text-rose-950"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Explore more projects
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}