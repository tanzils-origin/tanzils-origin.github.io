import React, { useState } from 'react';
import { svgPaths } from './data/svgPaths';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const GithubIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://github.com/tanzils-origin"
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-clip relative shrink-0 size-[24px] hover:opacity-70 hover:-translate-y-1 transition-all cursor-pointer duration-300"
        >
          <div className="absolute contents inset-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="icons">
                <path clipRule="evenodd" d={svgPaths.github} fill="#2D2D2D" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>Github</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const LinkedInIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://www.linkedin.com/in/tanzil-khan-084552282/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 size-[24px] hover:opacity-70 hover:-translate-y-1 transition-all cursor-pointer duration-300"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_3_87)">
              <path d={svgPaths.linkedin} fill="#2D2D2D" />
            </g>
            <defs>
              <clipPath id="clip0_3_87">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>LinkedIn</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const EmailIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="mailto:khantanzil307@gmail.com"
          className="h-[22.8px] relative shrink-0 w-[27.36px] hover:opacity-70 hover:-translate-y-1 transition-all cursor-pointer duration-300"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 23">
            <path d={svgPaths.email} fill="#2D2D2D" />
          </svg>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>Email</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const ResumeButton = () => (
  <a
    href="/TanzilKhanCV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2d2d2d] hover:bg-neutral-700 hover:-translate-y-1 transition-all duration-300 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0 group no-underline"
  >
    <span className="font-['JetBrains_Mono',monospace] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">
      Resume
    </span>
    <div className="relative shrink-0 size-[8.333px]">
      <div className="absolute inset-[-10%] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.arrow} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  </a>
);

export function Portfolio() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-screen box-border bg-neutral-100 flex flex-col items-center justify-center px-8 md:px-20 py-[60px] font-sans text-[#2d2d2d] overflow-hidden">

      {/* Yellow Box Profile/Graphic Placeholder */}
      <div
        onClick={() => setIsActive(!isActive)}
        className={`w-[180px] flex-1 mb-8 min-h-[100px] cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#ffc23b]' : 'bg-[#2D2D2D]'
          }`}
      />

      {/* Main Text Content */}
      <div className="text-center max-w-2xl space-y-4 mb-20">
        <h1 className="font-['Noto_Serif',serif] font-medium text-[40px] leading-normal whitespace-pre-wrap">
          Hey, I’m Tanzil.
        </h1>

        <p className="font-['JetBrains_Mono',monospace] text-[16px] leading-normal whitespace-pre-wrap">
          I build products with code.
          <br />
          I develop websites, APIs and manage them.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-['JetBrains_Mono',monospace] text-[#969696] text-[14px] mb-2">
          My important links
        </p>

        <div className="flex items-center gap-8">
          <GithubIcon />
          <LinkedInIcon />
          <EmailIcon />
          <ResumeButton />
        </div>
      </div>

    </div>
  );
}
