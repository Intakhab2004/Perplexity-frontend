import { ArrowRight } from "lucide-react"



interface propType {
    text: string,
    style: string
}

export function ButtonVariant1({text, style}: propType){
    return (
        <button 
            className={` ${style} inline-flex items-center gap-2 bg-transparent text-[#8faaa0] font-medium 
                rounded-[10px] border border-[rgba(16,185,129,0.22)] cursor-pointer no-underline`}
        >
            {text}
        </button>
    )
}


export function ButtonVariant2({text, style}: propType){
    return (
        <button 
            className={`${style} inline-flex items-center gap-2 bg-gradient-to-br from-emerald-600 to-teal-600 text-white 
                font-semibold rounded-[10px] border-0 cursor-pointer no-underline shadow-[0_0_20px_rgba(16,185,129,0.25)]`}
        >
            {text} <ArrowRight size={16} />
        </button>
    )
}