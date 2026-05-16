"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import { ArrowUp, Search, Telescope } from "lucide-react";
import TypingIndicator from "../components/Loader";
import MessageBubble from "../components/MessagesArea";
import generateUniqueUserId from "@/helpers/uniqueId";
import axios from "axios";


const SUGGESTIONS = [
    "Latest advancements in quantum computing",
    "How does RAG work in LLM pipelines?",
    "Compare React vs Vue for production apps",
    "Climate change impact on global agriculture",
]


// TODO: Test this api calling and remove the bugs found.

export default function ChatPage(){
    const [newChat, setNewChat] = useState(true);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState("");

    const bottomRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);


    useEffect(() => {
        const id = generateUniqueUserId();
        setUserId(id);
    }, [])
    

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages, loading])


    const handleSuggestionClick = (suggestion: string) => {
        setInput(suggestion);
        inputRef.current?.focus();
    }

    const handleSend = async() => {
        try{
            const text = input.trim();
            if(!text || loading){
                console.log("Please enter a valid message")
                return ;
            }

            const userMsg = {
                role: "user",
                content: text
            }

            setLoading(true);
            setNewChat(false);
            setMessages((prev) => [...prev, userMsg]);
            setInput("");

            const res = await axios.post("http://localhost:5000/ask", {
                user_id: userId,
                query: text
            })
            console.log("RESPONSE IS: ", res);

            if(!res.data?.success){
                alert("Server is down right now. Sorry for your loss.")
				setMessages((prev) => prev.slice(0, -1));
                setNewChat(true);
				return ;
            }

            const result = {
                ...res.data?.data,
                role: "bot"
            }

            setMessages((prev) => [...prev, result]);

        }
        catch(error){
            console.log("Something went while getting response");
            console.log("Internal server error: ", error);
        }
        finally{
            setLoading(false);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && !e.shiftKey){
            e.preventDefault();
            handleSend();
        }
    }

    return (
        <div className="font-['DM_Sans','Segoe_UI',sans-serif] bg-[#050a0a] text-[#e2e8e8] min-h-screen overflow-x-hidden">
            <Navbar />

            <section className="flex-1 overflow-y-auto px-5 mt-20">
                {/* Chat Area */}
                <div className="mx-auto max-w-[780px]">
                    {
                        newChat ? (
                            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                                <div className="mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-[14px] 
                                    bg-gradient-to-br from-emerald-600 to-teal-600 shadow-[0_0_28px_rgba(16,185,129,0.2)]"
                                >
                                    <Telescope size={24} color="#fff" />
                                </div>
                                <h1 className="mb-2.5 text-[26px] font-extrabold tracking-[-0.02em] text-[#d1e8e2]">
                                    What do you want to research?
                                </h1>
                                <p className="mb-8 max-w-[420px] text-[14px] leading-[1.7] text-[#3a5850]">
                                    DeepScout plans, searches, and synthesizes information with inline citations - ask anything.
                                </p>

                                {/* Suggestions */}
                                <div className="flex w-full max-w-[520px] flex-col gap-2">
                                    {
                                        SUGGESTIONS.map((s, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSuggestionClick(s)}
                                                className="flex w-full cursor-pointer items-center gap-2.5 rounded-[10px] border 
                                                    border-[rgba(16,185,129,0.1)] bg-[rgba(10,20,18,0.75)] px-4 py-[11px] text-left 
                                                    text-[13px] text-[#7a9a92] transition hover:border-emerald-500/20 hover:bg-[rgba(16,30,26,0.9)]"
                                            >
                                                <Search
                                                    size={13}
                                                    color="#10b981"
                                                    className="shrink-0"
                                                />
                                                {s}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        ) 
                        : 
                        (
                        <div className="pb-[120px] pt-7">
                            {
                                messages.map((msg, i) => (
                                    <MessageBubble key={i} message={msg} />
                                ))
                            }

                            {
                                loading && <TypingIndicator />
                            }

                            <div ref={bottomRef} />
                        </div>
                        )
                    }
                </div>
            </section>

            <section className="sticky bottom-0 bg-gradient-to-t from-[#050a0a] via-[#050a0a]/70 to-transparent px-5 pb-6 pt-4">
                <div className="mx-auto max-w-[780px]">
                    <div className="flex items-end gap-2.5 rounded-[14px] border border-[rgba(16,185,129,0.18)] bg-[rgba(10,20,18,0.9)] 
                        px-3 py-2.5 shadow-[0_0_28px_rgba(0,0,0,0.4)] backdrop-blur-[16px]"
                    >
                        <Search
                            size={15}
                            color="#2a4a42"
                            className="mb-2 shrink-0"
                        />
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask DeepScout anything…"
                            rows={1}
                            disabled={loading}
                            className="max-h-[120px] flex-1 resize-none overflow-y-auto bg-transparent py-1 text-[14px] leading-[1.65] 
                                text-[#c5ddd7] caret-emerald-500 outline-none placeholder:text-[#2a4a42]"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || loading}
                            className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] border transition-all duration-200 ${
                                input.trim() && !loading
                                    ? "cursor-pointer border-emerald-500/20 bg-gradient-to-br from-emerald-600 to-teal-600"
                                    : "cursor-default border-emerald-500/20 bg-emerald-500/10"
                            }`}
                        >
                            <ArrowUp
                                size={15}
                                color={input.trim() && !loading ? "#fff" : "#2a4a42"}
                            />
                        </button>
                    </div>

                    {/* Footer Text */}
                    <p className="mt-2 text-center text-[11px] text-[#1e3330]">
                        DeepScout can make mistakes. Verify important information from cited sources.
                    </p>
                </div>
            </section>
        </div>
    )
}