import { Telescope } from "lucide-react";



export default function TypingIndicator(){
    return (
        <div className="mb-5">
            <div className="mb-2.5 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-600 to-teal-600">
                    <Telescope size={12} color="#fff" />
                </div>
                <span className="text-[12px] font-semibold text-emerald-500">
                    DeepScout
                </span>
                <span className="text-[11px] text-[#2a4a42]">
                    Researching…
                </span>
            </div>
            <div className="inline-block rounded-[14px] border border-[rgba(16,185,129,0.12)] bg-[rgba(10,20,18,0.75)] px-5 py-4">
                <div className="flex items-center gap-[5px]">
                    {
                        [0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="h-[7px] w-[7px] animate-bounce rounded-full bg-emerald-500"
                                style={{
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: "1.2s",
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}