"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import RentalChatbot from "@/components/RentalChatbot";

export default function ProjectDetails({ params }) {
    // Await the params before using its properties in Next 15 Client Components via React.use()
    const pageParams = React.use(params);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        async function fetchProject() {
            try {
                const res = await fetch("/api/projects");
                if (!res.ok) throw new Error("Failed to fetch projects");
                const projects = await res.json();
                const match = projects.find((p) => p.id === pageParams.id);
                if (!match) {
                    notFound();
                    return;
                }
                setProject(match);
            } catch (err) {
                console.error("Error loading project:", err);
                notFound();
            } finally {
                setLoading(false);
            }
        }
        fetchProject();
    }, [pageParams.id]);

    if (loading || !project) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#3bbfbf]/40 border-t-[#3bbfbf] rounded-full animate-spin" />
            </main>
        );
    }

    // Split title to emulate the Aurionas "Immerse Deeply" font-weight split
    const firstWord = project.title.split(' ')[0];
    const restOfTitle = project.title.substring(project.title.indexOf(' ') + 1);

    return (
        <>
            <main className="min-h-screen pt-12 pb-12 px-6 lg:px-12 relative overflow-hidden flex flex-col items-center">

                {/* Back Navigation - Now a more visible button */}
                <div className="w-full max-w-[1500px] mb-8 relative z-20 px-4">
                    <Link
                        href="/"
                        className="px-6 py-3 glass-panel hover:bg-white/10 text-white rounded-full transition-all flex items-center gap-3 w-fit group text-sm font-semibold tracking-widest uppercase border border-white/20 shadow-lg"
                    >
                        <span className="transform transition-transform group-hover:-translate-x-1">←</span>
                        Return to Hub
                    </Link>
                </div>

                <div className="w-full max-w-[1500px] min-h-[75vh] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white relative px-4">

                    {/* LEFT COLUMN: Large Typography & Main Description */}
                    <div className="lg:col-span-4 flex flex-col justify-center space-y-12 z-10">
                        <div>
                            <h1 className="text-6xl lg:text-[5rem] font-light tracking-tight leading-[1.05]">
                                <span className="block text-white/40">{firstWord}</span>
                                <span className="block text-white font-medium">{restOfTitle}</span>
                            </h1>

                            <p className="text-[#a3a3b2] text-xl font-light leading-relaxed max-w-md mt-6">
                                {project.description}
                            </p>

                            {project.hardwareCost && (
                                <div className="mt-6">
                                    <p className="text-white/90 text-lg font-medium">
                                        Component cost: ₹{project.hardwareCost.toLocaleString('en-IN')}
                                    </p>
                                    <p className="text-[#a3a3b2] text-sm font-light mt-1">
                                        Rental pricing via WhatsApp
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="pt-2 flex flex-col gap-5">
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="w-fit px-10 py-5 bg-white text-black rounded-full font-bold tracking-wide text-lg
                                    shadow-[0_0_40px_rgba(255,255,255,0.2)]
                                    transition-all duration-200
                                    hover:bg-[#c8efef] hover:scale-105 hover:shadow-[0_0_60px_rgba(59,191,191,0.5)]
                                    active:scale-95 active:bg-[#a0e0e0] active:shadow-[inset_0_3px_10px_rgba(0,0,0,0.3)]
                                    cursor-pointer select-none"
                            >
                                Ask About This Project
                            </button>
                            <a
                                href={project.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit px-10 py-5 glass-panel rounded-full font-semibold tracking-wide text-base flex items-center gap-3 text-white border border-white/20
                                    transition-all duration-200
                                    hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                                    active:scale-95 active:bg-white/5
                                    cursor-pointer select-none"
                            >
                                <span>View Synopsis</span>
                            </a>
                        </div>
                    </div>

                    {/* CENTER VISUAL: Immersive Product Media (Image instead of Video) */}
                    <div className="lg:col-span-5 relative w-full aspect-[4/5] lg:h-[75vh] rounded-[3rem] overflow-hidden glass-panel glass-glow border border-[#3bbfbf]/20 shadow-[-20px_0_100px_rgba(59,191,191,0.08)] z-0 flex items-center justify-center -mx-4 lg:mx-0">
                        {/* Fallback gradient if image not found */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2828] to-[#050e0e] -z-10" />

                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-contain p-8 mix-blend-screen opacity-90 z-10"
                        />

                        {/* Subtle overlay gradients for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050e0e] via-transparent to-transparent opacity-80 pointer-events-none z-10" />

                        <div className="absolute inset-x-0 bottom-10 flex justify-center z-10 pointer-events-none">
                            <div className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full border border-white/5 text-xs tracking-widest uppercase text-white/70 backdrop-blur-3xl">
                                <span className="w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_10px_rgba(255,46,136,1)] animate-pulse" />
                                System Preview
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Video Modal Trigger (Replaces Efficiency Gain) */}
                    <div className="lg:col-span-3 flex flex-col lg:items-end justify-center z-10 space-y-8 pl-0 lg:pl-10">

                        {project.video ? (
                            <div
                                onClick={() => setIsVideoModalOpen(true)}
                                className="glass-panel w-full sm:w-80 rounded-[2.5rem] p-8 pb-10 border border-white/10 flex flex-col items-center text-center relative overflow-hidden bg-black/40 backdrop-blur-2xl cursor-pointer group hover:border-[#3bbfbf]/50 transition-colors duration-300"
                            >
                                {/* Inner background glow layer */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3bbfbf]/10 group-hover:bg-[#3bbfbf]/25 blur-[60px] rounded-full pointer-events-none transition-colors duration-500" />

                                {/* Play Icon Graphic */}
                                <div className="relative w-28 h-28 flex items-center justify-center mb-6">
                                    <div className="absolute inset-0 rounded-full border border-dashed border-[#3bbfbf]/50 animate-[spin_15s_linear_infinite]" />
                                    <div className="absolute inset-2 rounded-full border border-white/10 bg-[#050e0e]/50 group-hover:bg-[#050e0e]/80 transition-colors" />
                                    <div className="relative z-10 w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-[#3bbfbf] transition-colors drop-shadow-md">
                                    Watch Demo
                                </h3>

                                <p className="text-[#a3a3b2] text-sm font-light leading-relaxed px-2">
                                    Launch the full immersive system video demonstration.
                                </p>
                            </div>
                        ) : (
                            <div className="glass-panel w-full sm:w-80 rounded-[2.5rem] p-8 pb-10 border border-white/10 flex flex-col items-center text-center relative overflow-hidden bg-black/40 backdrop-blur-2xl">
                                <div className="relative w-28 h-28 flex items-center justify-center mb-6">
                                    <div className="absolute inset-2 rounded-full border border-white/5 bg-[#050e0e]/20" />
                                    <span className="text-[#a3a3b2] opacity-50 text-sm tracking-widest uppercase text-center leading-tight mt-[4.5rem]">No<br />Demo</span>
                                </div>
                                <h3 className="text-2xl font-light text-white/50 mb-3 drop-shadow-md mt-4">
                                    Demo Unavailable
                                </h3>
                                <p className="text-[#a3a3b2] text-sm font-light leading-relaxed px-2">
                                    A video demonstration is not currently available for this module.
                                </p>
                            </div>
                        )}

                    </div>

                </div>
            </main>

            {/* Video Modal Pop-Up */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12 md:p-24 bg-[#050e0e]/90 backdrop-blur-xl animate-in fade-in duration-300">
                    {/* Close wrapper overlay */}
                    <div
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setIsVideoModalOpen(false)}
                    />

                    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-[0_0_100px_rgba(59,191,191,0.2)] z-10">
                        <button
                            onClick={() => setIsVideoModalOpen(false)}
                            className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors border border-white/10"
                        >
                            ✕
                        </button>
                        <video
                            src={project.video}
                            autoPlay
                            controls
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
            {/* Chatbot Modal */}
            <RentalChatbot
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
                projectTitle={project.title}
            />
        </>
    );
}
