"use client"

import GridOverlay from "./components/GridOverlay"
import Navbar from "./components/Navbar"

export default function Home(){
	return (
		<div className="font-['DM_Sans','Segoe_UI',sans-serif] bg-[#050a0a] text-[#e2e8e8] min-h-screen overflow-x-hidden">
			<Navbar />

			<main>
				<section className="relative min-h-[92vh] flex justify-center items-center pt-10 px-4 md:px-6 pb-15 overflow-hidden">
					<GridOverlay />
					<div className="max-w-[860px] mx-auto text-center relative">
						{/* Badge */}
						<div className="-mt-30 mb-6">
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
					</div>
				</section>
			</main>
		</div>

		
	)
}