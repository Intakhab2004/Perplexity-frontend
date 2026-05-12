"use client"

import { ArrowRight, Telescope } from "lucide-react";
import { ButtonVariant1, ButtonVariant2 } from "./Buttons";


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
                    <ButtonVariant1 text="Sign in" style="text-sm px-[22px] py-[10px]"/>
                    <ButtonVariant2 text="Start Research" style="text-sm px-[22px] py-[10px]" />
                </div>
            </div>
        </nav>
    )
}