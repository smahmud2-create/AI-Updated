import svgPaths from "./svg-2l3iuzavv8";

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px]">{`Damage & Defect Allowance (DDA)`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2px] relative shrink-0 w-full">
      <Frame15 />
      <Information />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative w-full">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777279] text-[12px] w-[274px]">
        <p className="leading-[16px] whitespace-pre-wrap">Changed from 2% to 3% on Feb 18, 2025.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative w-full">
      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[24px] whitespace-nowrap">
        <p className="leading-[40px]">3.00%</p>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <Frame />
        <Frame4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[19.2px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
        <g id="Icon">
          <path d={svgPaths.p396c9480} id="Vector" stroke="var(--stroke-0, #9B1000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.2px] top-0" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[19.2px]" data-name="Warning">
      <Icon1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f8c4c4] flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[2.4px] relative size-full">
          <Warning />
        </div>
      </div>
    </div>
  );
}

function CardIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[24px]" data-name="Card icon">
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CardIcon />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px]">{`Damage & Defect Incident`}</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between py-[2px] relative shrink-0 w-full">
      <Frame16 />
      <Information1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M7 13.5L12 8.5L17 13.5" id="Vector" stroke="var(--stroke-0, #6F2119)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Up">
      <Icon4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f8c4c4] content-stretch flex gap-[6px] items-center px-[4px] relative rounded-[4px] shrink-0">
      <ChevronUp />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f2119] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">- 2.00%</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame5 />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777279] text-[12px] w-[151px]">
        <p className="leading-[16px] whitespace-pre-wrap">vs. Gross Incident Exposure (GIE) % of wholesale cost</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b1000] text-[24px] whitespace-nowrap">
        <p className="leading-[40px]">5.46%</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <Frame1 />
        <Frame19 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px]">Overall Incident</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2px] relative shrink-0 w-full">
      <Frame17 />
      <Information2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative w-full">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777279] text-[12px] w-[274px]">
        <p className="leading-[16px] whitespace-pre-wrap">(Potential next steps/ comparison data/ trends)</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative w-full">
      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[24px] whitespace-nowrap">
        <p className="leading-[40px]">8.10%</p>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <Frame2 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px]">Buyers’ Remorse Return</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2px] relative shrink-0 w-full">
      <Frame18 />
      <Information3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative w-full">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777279] text-[12px] w-[274px]">
        <p className="leading-[16px] whitespace-pre-wrap">(Potential next steps/ comparison data/ trends)</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative w-full">
      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[24px] whitespace-nowrap">
        <p className="leading-[40px]">2.23%</p>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <Frame3 />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[134px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

export default function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame10 />
    </div>
  );
}