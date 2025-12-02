import svgPaths from "./svg-0eiv6csttz";

function Frame() {
  return <div className="absolute bg-[#ffc23b] h-[320px] left-[calc(50%+0.5px)] top-[calc(50%-152px)] translate-x-[-50%] translate-y-[-50%] w-[180px]" />;
}

function DribbbleLightPreview() {
  return (
    <div className="absolute contents inset-0" data-name="Dribbble-Light-Preview">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons">
          <path clipRule="evenodd" d={svgPaths.pbdc31f0} fill="var(--fill-0, black)" fillRule="evenodd" id="github-[#142]" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-0" data-name="Page-1">
      <DribbbleLightPreview />
    </div>
  );
}

function Github142SvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="github-142_svgrepo.com">
      <Page />
    </div>
  );
}

function LinkedinSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="linkedin-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_42)" id="linkedin-svgrepo-com 1">
          <path d={svgPaths.p14d8f900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_42">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[22.8px] relative shrink-0 w-[27.36px]" data-name="layer1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 23">
        <g id="layer1">
          <path d={svgPaths.p1fe192f0} fill="var(--fill-0, black)" id="rect4592" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="Button">
      <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Resume</p>
      <div className="relative shrink-0 size-[8.333px]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p2679bc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full">
      <Github142SvgrepoCom />
      <LinkedinSvgrepoCom />
      <Layer />
      <Button />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[calc(50%+0.35px)] top-[642px] translate-x-[-50%]">
      <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#969696] text-[14px] text-center w-full">My important links</p>
      <Frame1 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-white relative size-full">
      <Frame />
      <p className="absolute font-['Noto_Serif:Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[40px] text-black text-center text-nowrap top-[440px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Hey, I’m Tanzil.
      </p>
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[16px] text-black text-center text-nowrap top-[518px] translate-x-[-50%] whitespace-pre">
        I build products with code.
        <br aria-hidden="true" />I develop websites, APIs and manage them.
      </p>
      <Frame2 />
    </div>
  );
}