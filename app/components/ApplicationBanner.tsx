import { ArrowRight, BarChart3, BookOpen, Code2, FlaskConical, Network, Telescope } from "lucide-react";
import { ButtonVariant2 } from "./Buttons";



const useCases = [
    { icon: FlaskConical, label: "Academic Research",   color: "#10b981" },
    { icon: BarChart3,    label: "Market Intelligence", color: "#3b82f6" },
    { icon: Code2,        label: "Technical Deep-Dives",color: "#8b5cf6" },
    { icon: BookOpen,     label: "Fact-Checking",       color: "#f59e0b" },
    { icon: Network,      label: "Competitive Analysis",color: "#ec4899" },
    { icon: Telescope,    label: "Trend Forecasting",   color: "#14b8a6" },
];


export default function ApplicationsAndBanner(){
    return (
        <section className="px-6 py-[90px]">
            <div className="mx-auto max-w-[1160px]">
                <div className="mb-[60px] text-center">
                    <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-500">
                        Applications
                    </div>

                    <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#d1e8e2] sm:text-[36px] md:text-[42px] lg:text-[48px]">
                        Who Uses DeepScout?
                    </h2>
                </div>

                {/* Use Cases Grid */}
                <div className="mb-14 grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-3">
                    {
                        useCases.map((uc, i) => {
                            const Icon = uc.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-3.5 rounded-2xl border border-[rgba(16,185,129,0.12)] bg-[rgba(10,20,18,0.75)] p-5 backdrop-blur-[12px]"
                                >
                                    <div
                                        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px]"
                                        style={{
                                            background: `${uc.color}18`,
                                            border: `1px solid ${uc.color}28`,
                                        }}
                                    >
                                        <Icon size={19} color={uc.color} />
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#b5cec8]">
                                        {uc.label}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

                {/* CTA Banner */}
                <div className="relative overflow-hidden rounded-[20px] border border-[rgba(16,185,129,0.2)] 
                    bg-[linear-gradient(135deg,rgba(5,150,105,0.15),rgba(13,148,136,0.1)_50%,rgba(59,130,246,0.1))] 
                    px-6 py-12 text-center sm:px-10 sm:py-[52px]"
                >
                    <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.07)_0%,transparent_65%)]"
                    />

                    <div className="relative">
                        <h2 className="mb-3.5 text-[24px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#d1e8e2] sm:text-[30px] md:text-[36px] lg:text-[40px]">
                            Ready to Scout Deeper?
                        </h2>

                        <p className="mx-auto mb-[34px] max-w-[440px] text-[15px] text-[#5a7a72]">
                            Join researchers, analysts, and knowledge workers who trust DeepScout for their most demanding questions.
                        </p>

                        <ButtonVariant2 text="Open Research Agent" style="text-[16px] px-[38px] py-[15px] transition duration-300 hover:scale-[1.02] "/>
                    </div>
                </div>
            </div>
        </section>
    )
}