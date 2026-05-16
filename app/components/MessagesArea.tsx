import { CheckCircle2, Copy, ExternalLink, Globe, Telescope } from "lucide-react";
import { useState } from "react";


interface Message {
    role: string,
    content: string,
    sources?: {
        id: number,
        title: string,
        url: string
    }[]
}

interface GroupedSources {
    ids: number[],
    title: string,
    url: string
}

export default function MessageBubble({message}: {message: Message} ){
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(message.content || "");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    // Grouping duplicates sources from the sources array
    const groupedSources: GroupedSources[] = [];
    message.sources?.forEach((source) => {
        const existing = groupedSources.find(
            (s) => s.title === source.title && s.url === source.url
        );

        if(existing){
            existing.ids.push(source.id);
        }
        else{
            groupedSources.push({
                ids: [source.id],
                title: source.title,
                url: source.url
            })
        }
    })

    if(message.role === "user"){
        return (
            <div className="mb-5 flex justify-end">
                <div className="max-w-[72%] rounded-[16px_16px_4px_16px] border border-emerald-500/20 bg-gradient-to-br from-emerald-600/20 to-teal-600/10 px-4 py-3">
                    <p className="m-0 text-sm leading-[1.65] text-[#c5ddd7]">
                        {message.content}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="mb-7">
            {/* Bot label */}
            <div className="mb-3 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-600 to-teal-600">
                    <Telescope size={12} color="#fff" />
                </div>
                <span className="text-xs font-semibold text-emerald-500">
                    DeepScout
                </span>
            </div>

            {/* Answer card */}
            <div className="rounded-xl border border-emerald-500/10 bg-[rgba(10,20,18,0.75)] p-5 backdrop-blur-xl">
                <p className="mb-4 text-sm leading-[1.75] text-[#8faaa0]">
                    {message.content}
                </p>

                {/* Citations */}
                {
                    groupedSources && (
                        <div className="border-t border-emerald-500/10 pt-4">
                            <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2a4a42]">
                                Sources
                            </div>

                            <div className="flex flex-col gap-1.5">
                            {
                                groupedSources.map((s, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-2.5 rounded-lg border border-emerald-500/10 bg-[rgba(5,10,10,0.6)] px-2.5 py-2"
                                    >
                                        <div className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded bg-emerald-500/10">
                                            <span className="text-[9px] font-bold text-emerald-500">
                                                {
                                                    s.ids.map((id) => `[${id}]`).join("")
                                                }
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="mb-0.5 text-xs font-semibold text-[#b5cec8]">
                                                {s.title}
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px] text-[#3a5850]">
                                                <Globe size={9} />
                                                {s.url}
                                            </div>
                                        </div>

                                        <a
                                            href={s.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-shrink-0 text-[#3a5850]"
                                        >
                                            <ExternalLink size={12} />
                                        </a>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    )
                }

                {/* Copy button */}
                <div className="mt-3 flex justify-end">
                    <button
                        onClick={handleCopy}
                        className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-[11px] text-[#2a4a42] transition hover:bg-white/5"
                    >
                        {
                            copied ? (
                                <CheckCircle2 size={12} className="text-emerald-500" />
                            ) 
                            : 
                            (
                                <Copy size={12} />
                            )
                        }

                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            </div>
        </div>
    )
}