"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project, featured = false }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch((err) => console.log("Video auto-play prevented:", err));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <Link
            href={`/projects/${project.id}`}
            className={`block relative glass-panel rounded-3xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:glass-glow group flex flex-col ${featured ? "md:col-span-2" : ""} ${!project.isAvailable ? "grayscale opacity-50" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <div
                    className={`w-2.5 h-2.5 rounded-full ${project.isAvailable
                        ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"
                        : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                        }`}
                ></div>
                <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
                    {project.isAvailable ? "AVAILABLE" : "CURRENTLY UNAVAILABLE"}
                </span>
            </div>

            {/* Media Container */}
            <div
                className="relative w-full overflow-hidden bg-[#050e0e]/50"
                style={{ aspectRatio: project.videoAspectRatio || "16/9", minHeight: "16rem" }}
            >
                {/* Thumbnail Placeholder / Image Viewer */}
                <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 z-10 ${isHovered && project.video ? "opacity-0" : "opacity-100"
                        }`}
                >
                    {project.image ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" />
                            <div className="absolute inset-0 bg-[#3bbfbf]/08 mix-blend-overlay z-0"></div>

                            {/* "PREVIEW" text overlay that fades on hover */}
                            <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                                <span className="text-white/90 font-medium uppercase tracking-[0.25em] text-[13px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Preview</span>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-teal-900/40 to-black flex items-center justify-center">
                            <span className="text-white/20 font-bold uppercase tracking-widest text-xl">Preview</span>
                        </div>
                    )}
                </div>

                {/* Video */}
                {project.video && (
                    <video
                        ref={videoRef}
                        src={project.video}
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6 relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-cinzel tracking-wider font-light text-white mb-6 flex-grow">
                    {project.title}
                </h3>

                {/* Hardware Cost Badge */}
                {project.hardwareCost && (
                    <span className="inline-block w-fit mb-4 px-3 py-1 text-xs font-medium tracking-wide text-[#3bbfbf]/90 bg-[#3bbfbf]/10 border border-[#3bbfbf]/20 rounded-full backdrop-blur-sm">
                        Components: ₹{project.hardwareCost.toLocaleString('en-IN')}
                    </span>
                )}

                {/* Actions Layout */}
                <div className="flex items-center justify-between mt-auto">
                    {project.price && (
                        <span className="text-xl font-medium text-white/90">
                            ${project.price.toLocaleString()}
                        </span>
                    )}
                    <div className="px-5 py-2.5 bg-[#3bbfbf]/15 hover:bg-[#3bbfbf]/30 text-[#3bbfbf] rounded-full text-sm font-semibold transition-colors duration-300 border border-[#3bbfbf]/25 hover:shadow-[0_0_15px_rgba(59,191,191,0.25)] hover:text-white">
                        View Details
                    </div>
                </div>
            </div>
        </Link>
    );
}
