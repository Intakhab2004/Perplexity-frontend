import { Telescope } from "lucide-react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";


const FooterLinks = [
    { label: "Product", items: ["Features", "Workflow", "Use Cases", "API Docs", "Changelog"] },
    { label: "Resources", items: ["Documentation", "Blog", "Research Paper", "GitHub", "Community"] },
    { label: "Company", items: ["About", "Privacy Policy", "Terms of Service", "Contact", "Status"] },
]


export default function Footer(){
    return (
        <footer className="border-t border-[rgba(16,185,129,0.08)] px-6 pt-[60px] pb-9">
            <div className="mx-auto max-w-[1160px]">
                <div className="mb-[52px] grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <div className="mb-4 flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[linear-gradient(135deg,#059669,#0d9488)]">
                                <Telescope size={13} color="#fff" />
                            </div>
                            <span className="text-[16px] font-extrabold text-[#e2e8e8]">
                                Deep<span className="text-emerald-500">Scout</span>
                            </span>
                        </div>

                        <p className="mb-[22px] max-w-[280px] text-[13px] leading-[1.7] text-[#3d5a52]">
                            An AI research agent that thinks before it searches — delivering structured, cited intelligence from the web.
                        </p>

                        <div className="flex gap-2.5">
                            {
                                [FiGithub, FiTwitter, FiLinkedin, FiMail].map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-lg border 
                                            border-white/[0.07] bg-white/[0.04] text-[#3d5a52] transition-all duration-300 
                                            hover:border-emerald-500/20 hover:text-emerald-400"
                                    >
                                        <Icon />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Columns */}
                    {
                        FooterLinks.map((col) => (
                            <div key={col.label}>
                                <div className="mb-[18px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#253b34]">
                                    {col.label}
                                </div>

                                {
                                    col.items.map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="mb-[11px] block text-[13px] text-[#3d5a52] no-underline transition-colors duration-300 hover:text-emerald-400"
                                        >
                                            {item}
                                        </a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-[rgba(16,185,129,0.07)] pt-[26px]">
                    <div className="text-[12px] text-[#253b34]">
                        © 2026 DeepScout. All rights reserved.
                    </div>
                    <div className="flex items-center gap-[7px]">
                        <div className="h-[7px] w-[7px] rounded-full bg-emerald-500" />
                        <span className="text-[12px] text-[#253b34]">
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}