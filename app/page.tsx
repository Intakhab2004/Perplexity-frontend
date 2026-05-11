"use client"

import { ButtonVariant1, ButtonVariant2 } from "./components/Buttons"
import GridOverlay from "./components/GridOverlay"
import Navbar from "./components/Navbar"
import Features from "./components/Features";
import ApplicationsAndBanner from "./components/ApplicationBanner";
import Footer from "./components/Footer";
import Workflow from "./components/Workflow";


const techStack = [
	{ label: "Tavily Search API",  color: "#10b981" },
	{ label: "BeautifulSoup4",     color: "#3b82f6" },
	{ label: "Trafilatura",        color: "#8b5cf6" },
	{ label: "Gemini Embeddings",  color: "#f59e0b" },
	{ label: "QdrantDB",           color: "#ec4899" },
	{ label: "Groq",             color: "#f97316" },
	{ label: "FastAPI",            color: "#10b981" },
	{ label: "Next.js",            color: "#3b82f6" },
	{ label: "TailwindCSS",        color: "#8b5cf6" },
	{ label: "Shadcn UI",          color: "#14b8a6" },
]



export default function Home(){
	return (
		<div className="font-['DM_Sans','Segoe_UI',sans-serif] bg-[#050a0a] text-[#e2e8e8] min-h-screen overflow-x-hidden">
			<Navbar />

			<main>
				<section className="relative min-h-[92vh] flex justify-center items-center pt-20 px-4 md:px-6 pb-15 overflow-hidden">
					<GridOverlay />
					<div className="max-w-[860px] mx-auto text-center relative">
						{/* Badge */}
						<div className="mb-6">
							<span className="inline-flex items-center gap-2 bg-[rgba(16,185,129,0.1)] border-1 border-[rgba(16,185,129,0.22))] rounded-full py-[7px] px-4 text-[13px] text-[#34d399] font-medium" >
								<span className="w-[7px] h-[7px] rounded-full bg-[#10b981] inline-block" />
								AI Research Agent · Now in Beta
							</span>
						</div>

						{/* Headline */}
						<h1 className="font-extrabold leading-[1.08] tracking-[-0.02em] mb-5 text-[38px] text-[#e8f5f1] sm:text-[52px] md:text-[64px] lg:text-[78px]">
							Research That Thinks
							<br />
							<span className="bg-gradient-to-br from-emerald-500 to-violet-500 bg-clip-text text-transparent">
								Before It Searches
							</span>
						</h1>
			
						<p className="mx-auto mb-9 max-w-[580px] text-[15px] leading-7 font-normal text-[#5a7a72] sm:text-[16px] md:text-[17px] md:leading-[1.75]">
							DeepScout is an AI-powered research agent that plans, searches, extracts, and synthesizes information from 
							the web delivering structured, cited answers in seconds.
						</p>

						<div className="flex gap-3.5 justify-center flex-wrap mb-10" >
							<ButtonVariant2 text="Start Researching Free" style="text-[16px] px-[32px] py-[14px]" />
							<ButtonVariant1 text="See How It Works" style="text-[16px] px-[32px] py-[14px]"/>
						</div>

						{/* Tags */}
						<div className="flex gap-2 justify-center flex-wrap mb-12">
							{
								["Tavily Search","BeautifulSoup","Trafilatura","Vector RAG","Groq","Cited Answers"].map((t) => (
									<span 
										key={t} 
										className="px-[13px] py-[5px] rounded-full bg-white/[0.04] border border-white/[0.07] text-[12px] text-[#5a7a72]"
									>
										{t}
									</span>
								))
							}
						</div>
					</div>
				</section>

				{/* Workflow */}
				<Workflow />

				{/* Features */}
				<Features />

				{/* Application and Banner */}
				<ApplicationsAndBanner />

				{/* TechStack */}
				<section className="px-[72px] py-6">
					<div className="max-w-[960px] mx-auto text-center">
						<div className="mb-6 text-[11px] font-bold uppercase text-[#10b981] tracking-[0.18em]">
							Technology Stack
						</div>
						<div className="flex justify-center flex-wrap gap-2.5">
							{
								techStack.map((tech, i) => (
									<div 
										key={i} 
										className="px-4 py-2.5 rounded-full text-[13px] font-medium"
										style={{ background: `${tech.color}10`, border: `1px solid ${tech.color}22`, color: tech.color}}
									>
										{tech.label}
									</div>
								))
							}
						</div>
					</div>
        		</section>

				{/* Footer */}
				<Footer />
			</main>
		</div>

		
	)
}