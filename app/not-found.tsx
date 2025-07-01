"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00FCFF] via-[#3EAEC2] to-[#0F0F0F] flex items-center justify-center px-6">
      <div className="bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-8xl font-extrabold text-white tracking-tight">404</h1>
        <p className="mt-4 text-2xl font-semibold text-cyan-300">Page Not Found</p>
        <p className="mt-2 text-gray-300 text-sm">
          The page you&apos;re looking for doesn&apos;t exist or might have been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
