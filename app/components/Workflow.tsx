import { Brain, Cpu, Database, FileSearch, GitBranch, Globe, Layers, Search, Zap } from "lucide-react";




const workflowSteps = [
    { id: 1, icon: Search,     label: "User Query",              sub: "Natural language input",          color: "#10b981", bg: "rgba(16,185,129,0.1)" },
    { id: 2, icon: GitBranch,  label: "Planning & Sub-queries",  sub: "Query decomposition",             color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
    { id: 3, icon: Globe,      label: "Web Search",              sub: "Tavily API",                      color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
    { id: 4, icon: FileSearch, label: "Content Extraction",      sub: "BeautifulSoup + Trafilatura",     color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
    { id: 5, icon: Cpu,        label: "Embeddings",              sub: "Vector representations",          color: "#ec4899", bg: "rgba(236,72,153,0.1)" },
    { id: 6, icon: Database,   label: "Vector Storage",          sub: "QdrantDB",             color: "#14b8a6", bg: "rgba(20,184,166,0.1)" },
    { id: 7, icon: Layers,     label: "Retrieval",               sub: "Semantic similarity search",      color: "#f97316", bg: "rgba(249,115,22,0.1)" },
    { id: 8, icon: Zap,        label: "Answer Generation",       sub: "LLM + inline citations",          color: "#10b981", bg: "rgba(16,185,129,0.1)" },
];

const explanation = [
    {
        icon: Brain,
        color: "#10b981",
        bg: "rgba(16,185,129,0.1)",
        title: "Intelligent Query Decomposition",
        body: "DeepScout first analyzes your question and breaks it into atomic sub-queries. This ensures breadth of coverage before any search is initiated — think of it as a research assistant that knows how to ask the right questions.",
    },
    {
        icon: Globe,
        color: "#3b82f6",
        bg: "rgba(59,130,246,0.1)",
        title: "Multi-Source Web Research",
        body: "Each sub-query is fired against the Tavily Search API, returning ranked URLs. The agent then scrapes pages using BeautifulSoup and Trafilatura — extracting clean article text and stripping boilerplate noise.",
    },
    {
        icon: Database,
        color: "#8b5cf6",
        bg: "rgba(139,92,246,0.1)",
        title: "RAG Pipeline: Embed → Store → Retrieve",
        body: "Extracted content is chunked, embedded into dense vectors, and stored in a vector database. Retrieval is driven by semantic similarity — pulling only the most relevant passages for LLM context.",
    },
    {
        icon: Zap,
        color: "#f59e0b",
        bg: "rgba(245,158,11,0.1)",
        title: "Cited Answer Synthesis",
        body: "The final step passes retrieved context to a language model, which synthesizes a structured, comprehensive answer complete with inline citations and source URLs — so every claim is traceable.",
    }
]


export default function Workflow(){
    return (
        <section id="workflow" className="relative px-6 py-[90px]">
            <div className="mx-auto max-w-[1160px]">
                <div className="mb-[60px] text-center">
                    <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-500">
                        Architecture
                    </div>
                    <h2 className="mb-4 text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#d1e8e2] sm:text-[36px] md:text-[42px] lg:text-[48px]">
                        How DeepScout Generates Answers
                    </h2>
                    <p className="mx-auto max-w-[500px] text-[15px] text-[#4a6860]">
                        A multi-stage pipeline designed for accuracy — from raw query to cited response.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
                    {/* Left Pipeline */}
                    <div className="flex flex-col">
                        {
                            workflowSteps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.id}>
                                        <div className="flex items-start gap-4 rounded-xl border border-[rgba(16,185,129,0.08)] bg-[rgba(8,20,16,0.6)] px-5 py-[18px]">
                                            {/* Step Number */}
                                            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg 
                                                border border-[rgba(16,185,129,0.18)] bg-[rgba(16,185,129,0.08)] text-[10px] font-bold 
                                                text-emerald-500"
                                            >
                                                {String(step.id).padStart(2, "0")}
                                            </div>

                                            {/* Icon */}
                                            <div
                                                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px]"
                                                style={{ background: step.bg }}
                                            >
                                                <Icon size={18} color={step.color} />
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <div className="mb-[3px] text-[14px] font-semibold text-[#c5ddd7]">
                                                    {step.label}
                                                </div>
                                                <div className="text-[12px] text-[#4a6860]">
                                                    {step.sub}
                                                </div>
                                            </div>

                                            {/* Badge */}
                                            <span
                                                className="rounded-full px-2 py-[3px] text-[10px] font-bold tracking-[0.08em]"
                                                style={{
                                                    color: step.color,
                                                    background: step.bg,
                                                }}
                                            >
                                                STEP {step.id}
                                            </span>
                                        </div>

                                        {
                                            i < workflowSteps.length - 1 && (
                                                <div className="mx-auto h-9 w-[2px] bg-[linear-gradient(to_bottom,rgba(16,185,129,0.35),rgba(16,185,129,0.04))]" />
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Right Explanation Cards */}
                    <div className="flex flex-col gap-[18px]">
                        {
                            explanation.map((card, i) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={i}
                                        className="rounded-2xl border border-[rgba(16,185,129,0.12)] bg-[rgba(10,20,18,0.75)] p-[20px_22px] backdrop-blur-[12px]"
                                    >
                                        <div className="flex items-start gap-3.5">
                                            <div
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]"
                                                style={{ background: card.bg }}
                                            >
                                                <Icon size={18} color={card.color} />
                                            </div>
                                            <div>
                                                <div className="mb-2 text-[14px] font-semibold text-[#c5ddd7]">
                                                    {card.title}
                                                </div>
                                                <div className="text-[13px] leading-[1.65] text-[#4a6860]">
                                                    {card.body}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}