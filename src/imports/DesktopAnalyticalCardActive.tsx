import svgPaths from "./svg-ttbjvldsrh";

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777279] text-[10px]">ORDERS</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <Text1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text />
      <Information />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] justify-center ml-0 mt-[8px] not-italic relative row-1 text-[14px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">Overdues Orders</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] h-[28px] justify-center ml-0 mt-[14px] not-italic relative row-1 text-[24px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">10</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Group />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame9 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="📦 Link">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#66256a] text-[14px] underline">View Overdue Orders</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white h-[124px] relative rounded-[8px] shrink-0 w-[312px]">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Frame8 />
        <Link />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex h-[124px] items-start relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777279] text-[10px]">ORDERS</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <Text3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text2 />
      <Information1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] justify-center ml-0 mt-[8px] not-italic relative row-1 text-[14px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">Cancelled Orders</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] h-[28px] justify-center ml-0 mt-[14px] not-italic relative row-1 text-[24px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Group1 />
      <Frame15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame14 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="📦 Link">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#66256a] text-[14px] underline">View Cancelled Orders</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[312px]">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Frame11 />
        <Link1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[124px] items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777279] text-[10px]">ORDERS</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <Text5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text4 />
      <Information2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] justify-center ml-0 mt-[8px] not-italic relative row-1 text-[14px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">Unconfirmed Replacement Parts</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] h-[28px] justify-center ml-0 mt-[14px] not-italic relative row-1 text-[24px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">50</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group5 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Group4 />
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame21 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="📦 Link">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#66256a] text-[14px] underline">View Unconfirmed Replacement Parts</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[312px]">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Frame18 />
        <Link2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex h-[124px] items-start relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777279] text-[10px]">ORDERS</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <Text7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p771e300} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Information3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text6 />
      <Information3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] justify-center ml-0 mt-[8px] not-italic relative row-1 text-[14px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">Unshipped Replacement Parts</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Lato:Bold',sans-serif] h-[28px] justify-center ml-0 mt-[14px] not-italic relative row-1 text-[24px] text-black w-[280px]">
        <p className="leading-[16px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group7 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Group6 />
      <Frame27 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame26 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="📦 Link">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#66256a] text-[14px] underline">View Unshipped Replacement Parts</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[312px]">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Frame25 />
        <Link3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex h-[124px] items-start relative shrink-0 w-[312px]">
      <Frame24 />
    </div>
  );
}

export default function DesktopAnalyticalCardActive() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative size-full" data-name="Desktop/Analytical/Card/Active">
      <Frame20 />
      <Frame16 />
      <Frame19 />
      <Frame23 />
    </div>
  );
}