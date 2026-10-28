import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-rose-100 shadow-soft text-center">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          Error 404
        </span>

        <h1 className="text-3xl font-extrabold text-[#1E1B1D] mt-4">
          Page Not Found
        </h1>

        <p className="mt-2 text-sm text-[#5C5458] leading-relaxed">
          The page or project you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#9F1239] to-[#BE185D] hover:from-[#881337] hover:to-[#9F1239] shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

