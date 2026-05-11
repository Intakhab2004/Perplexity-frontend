import { BarChart3, Brain, Database, FileSearch, Globe, Shield } from "lucide-react";

const features = [
	{ icon: Brain,      color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "Intelligent Query Planning",   desc: "DeepScout decomposes complex questions into targeted sub-queries, ensuring every research dimension is covered." },
	{ icon: Globe,      color: "#3b82f6", bg: "rgba(59,130,246,0.1)", title: "Real-Time Web Intelligence",   desc: "Powered by Tavily Search API, DeepScout fetches fresh web results, no stale knowledge cutoffs, ever." },
	{ icon: FileSearch, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Deep Content Extraction",     desc: "BeautifulSoup and Trafilatura strip noise and extract clean, meaningful text from every source page." },
	{ icon: Database,   color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", title: "Semantic Vector Retrieval",   desc: "Extracted content is embedded and stored in a vector store. Retrieval is driven by semantic similarity, not keywords." },
	{ icon: Shield,     color: "#14b8a6", bg: "rgba(20,184,166,0.1)", title: "Cited, Verifiable Answers",   desc: "Every answer includes inline citations linked to source URLs, so every claim is traceable and verifiable." },
	{ icon: BarChart3,  color: "#ec4899", bg: "rgba(236,72,153,0.1)", title: "Structured Insight Output",   desc: "Answers are structured with key takeaways, supporting evidence, and confidence tiers for serious researchers." },
];


export default function Features(){
    return (
        <section className="bg-[rgba(4,8,8,0.55)] px-6 py-[90px]">
			<div className="mx-auto max-w-[1160px]">
				<div className="mb-16 text-center">
							<div className="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-500 mb-3.5">
						Capabilities
					</div>
					<h2 className="mb-4 text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#d1e8e2] sm:text-[36px] 
							md:text-[42px] lg:text-[48px]"
					>
						Built for Serious Research
					</h2>

					<p className="mx-auto max-w-[480px] text-[15px] text-[#4a6860]"
					>
						Every feature is purpose-built to improve answer quality, traceability, and depth.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
				{
					features.map((f, i) => {
						const Icon = f.icon;

						return (
							<div
								key={i}
								className="bg-[rgba(10,20,18,0.75)] border border-[rgba(16,185,129,0.12)] rounded-2xl p-[26px_24px] backdrop-blur-md"
							>
								<div
									className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-xl"
									style={{ background: f.bg }}
								>
									<Icon size={21} color={f.color} />
								</div>
								<h3 className="mb-2.5 text-[15px] font-bold text-[#c5ddd7]">
									{f.title}
								</h3>
								<p className="text-[13px] leading-[1.65] text-[#4a6860]">
									{f.desc}
								</p>
							</div>
						)
					})
				}
				</div>
			</div>
		</section>
    )
}

