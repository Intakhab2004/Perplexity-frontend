"use client"

import { ArrowRight, Telescope } from "lucide-react";


export default function Navbar(){
    return (
        <nav className="px-3 md:px-6 border-b backdrop-blur-lg border-emerald-500/10 bg-[rgba(5,10,10,0.8)]">
            <div className="max-w-[1160px] mx-auto flex items-center h-16 gap-8">
                <div className="flex items-center gap-1.5 flex-1">
                    <div className="w-8 h-8 rounded-lg flex justify-center items-center bg-gradient-to-br from-emerald-600 to-teal-600">
                        <Telescope size={15} color="#fff" />
                    </div>
                    <span className="font-extrabold text-[19px] text-[#e2e8e8] tracking-[-0.03em]">
                        Deep<span className="text-[#10b981]">Scout</span>
                    </span>
                </div>
                <div className="hidden md:flex gap-3">
                    <button 
                        className="inline-flex items-center gap-2 bg-transparent text-[#8faaa0] text-sm font-medium px-[22px] py-[10px] 
                            rounded-[10px] border border-[rgba(16,185,129,0.22)] cursor-pointer no-underline"
                    >
                        Sign In
                    </button>
                    <button 
                        className="inline-flex items-center gap-2 bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-sm 
                            font-semibold px-[22px] py-[10px] rounded-[10px] border-0 cursor-pointer no-underline shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                    >
                        Start Research <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </nav>
    )
}