import svgPaths from "./svg-c70sgjh61e";

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211e22] text-[16px]">Resolution Type Breakdown</p>
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

function TitleFilter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title + Filter">
      <Text />
      <Information />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[19.2px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
        <g id="Icon">
          <path d={svgPaths.p1b276900} id="Vector" stroke="var(--stroke-0, #BD5500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
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

function Frame3() {
  return (
    <div className="bg-[#ffc494] content-stretch flex items-center p-[2.4px] relative rounded-[12px] shrink-0 size-[24px]">
      <Warning />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[24px]">
      <Frame3 />
    </div>
  );
}

function CardIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[24px]" data-name="Card icon">
      <Frame4 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <CardIcon />
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4d4a4f] text-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">High Cost Resolution</p>
      </div>
    </div>
  );
}

function Icon2() {
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
      <Icon2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2px] relative shrink-0 w-full">
      <Frame19 />
      <Information1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic py-[4px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Lato:Medium',sans-serif] h-[28px] justify-center leading-[0] relative shrink-0 text-[#bd5500] text-[24px] w-[81px]">
        <p className="leading-[40px] whitespace-pre-wrap">41.00%</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[16px] relative shrink-0 text-[#777279] text-[11.2px] whitespace-nowrap">
        <p className="mb-0">Full Refund: 20</p>
        <p>Full Unit Replacement: 32</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[293px]">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame />
      <Frame16 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4d4a4f] text-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">Low Cost Resolution</p>
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

function Information2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2px] relative shrink-0 w-full">
      <Frame20 />
      <Information2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Lato:Medium',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[24px] w-[81px]">
        <p className="leading-[40px] whitespace-pre-wrap">12.00%</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[8px] relative rounded-[4px] self-stretch shrink-0 w-[293px]">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame1 />
      <Frame17 />
    </div>
  );
}

function LegentsNumbers() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Legents + Numbers">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute h-[145.955px] left-[3.36%] right-0 top-[35px]" data-name="Grid">
      <div className="absolute inset-[-0.16%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1167.47 146.189">
          <g id="Grid">
            <line id="Line 149" stroke="var(--stroke-0, #F5F5F5)" x1="0.0146484" x2="1167.47" y1="0.5" y2="0.5" />
            <line id="Line 150" stroke="var(--stroke-0, #F5F5F5)" x1="0.0146484" x2="1167.47" y1="29.5377" y2="29.5377" />
            <line id="Line 151" stroke="var(--stroke-0, #F5F5F5)" x1="0.0146484" x2="1167.47" y1="58.5761" y2="58.5761" />
            <line id="Line 152" stroke="var(--stroke-0, #F5F5F5)" x1="0.0146484" x2="1167.47" y1="87.6137" y2="87.6137" />
            <line id="Line 153" stroke="var(--stroke-0, #F5F5F5)" x1="0.0146484" x2="1167.47" y1="116.651" y2="116.651" />
            <line id="Base" stroke="var(--stroke-0, #93939A)" x1="0.0146484" x2="1167.47" y1="145.689" y2="145.689" />
            <line id="Line 154" stroke="var(--stroke-0, #93939A)" x1="0.5" x2="0.500009" y1="146.149" y2="0.234103" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function XAxisLabel() {
  return (
    <div className="absolute content-stretch flex font-['Lato:Regular',sans-serif] h-[16.055px] items-start justify-between leading-[0] left-[3.35%] not-italic right-0 text-[#646266] text-[11.2px] text-center top-[183.87px]" data-name="x-axis label">
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">Dec 18</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">Jan 18</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">Feb 18</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">Mar 18</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">Apr 18</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">May 18</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[40px]">
        <p className="leading-[16px] whitespace-pre-wrap">Jun 18</p>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#b3dbb3] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#66256a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#ffe38a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#646266] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#aa7fac] h-[35px] shrink-0 w-[12px]" />
      <div className="bg-[#245728] h-[61px] shrink-0 w-[12px]" />
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#b3dbb3] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#66256a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#ffe38a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#646266] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#aa7fac] h-[35px] shrink-0 w-[12px]" />
      <div className="bg-[#245728] h-[61px] shrink-0 w-[12px]" />
    </div>
  );
}

function Bar2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] h-[7px] shrink-0 w-[12px]" />
      <div className="bg-[#b3dbb3] h-[8px] shrink-0 w-[12px]" />
      <div className="bg-[#66256a] h-[8px] shrink-0 w-[12px]" />
      <div className="bg-[#ffe38a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#646266] h-[20px] shrink-0 w-[12px]" />
      <div className="bg-[#aa7fac] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#245728] h-[29px] shrink-0 w-[12px]" />
    </div>
  );
}

function Bar3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#b3dbb3] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#66256a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#ffe38a] h-[18px] shrink-0 w-[12px]" />
      <div className="bg-[#646266] h-[16px] shrink-0 w-[12px]" />
      <div className="bg-[#aa7fac] h-[35px] shrink-0 w-[12px]" />
      <div className="bg-[#245728] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
    </div>
  );
}

function Bar4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] h-[7px] shrink-0 w-[12px]" />
      <div className="bg-[#b3dbb3] h-[8px] shrink-0 w-[12px]" />
      <div className="bg-[#66256a] h-[15px] shrink-0 w-[12px]" />
      <div className="bg-[#ffe38a] h-[27px] shrink-0 w-[12px]" />
      <div className="bg-[#646266] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#aa7fac] h-[45px] shrink-0 w-[12px]" />
      <div className="bg-[#245728] h-[29px] shrink-0 w-[12px]" />
    </div>
  );
}

function Bar5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] h-[3px] shrink-0 w-[12px]" />
      <div className="bg-[#b3dbb3] h-[8px] shrink-0 w-[12px]" />
      <div className="bg-[#66256a] h-[21px] shrink-0 w-[12px]" />
      <div className="bg-[#ffe38a] h-[19px] shrink-0 w-[12px]" />
      <div className="bg-[#646266] h-[21px] shrink-0 w-[12px]" />
      <div className="bg-[#aa7fac] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#245728] h-[29px] shrink-0 w-[12px]" />
    </div>
  );
}

function Bar6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[10px]" data-name="Bar">
      <div className="bg-[#363438] h-[3px] shrink-0 w-[12px]" />
      <div className="bg-[#b3dbb3] h-[8px] shrink-0 w-[12px]" />
      <div className="bg-[#66256a] h-[9px] shrink-0 w-[12px]" />
      <div className="bg-[#ffe38a] flex-[1_0_0] min-h-px min-w-px w-[12px]" />
      <div className="bg-[#646266] h-[18px] shrink-0 w-[12px]" />
      <div className="bg-[#aa7fac] h-[51px] shrink-0 w-[12px]" />
      <div className="bg-[#245728] h-[29px] shrink-0 w-[12px]" />
    </div>
  );
}

function BarGraph() {
  return (
    <div className="absolute bottom-[19.36px] content-stretch flex h-[145.638px] items-end justify-between left-[55.96px] w-[1134.48px]" data-name="Bar Graph">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
    </div>
  );
}

function Chart1() {
  return (
    <div className="absolute bottom-[0.07px] contents left-[40.53px]" data-name="Chart">
      <Grid />
      <XAxisLabel />
      <BarGraph />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[157.412px] items-end justify-between leading-[16px] left-0 text-[#646266] text-right top-[30.15px]">
      <p className="relative shrink-0">100%</p>
      <p className="relative shrink-0">80%</p>
      <p className="relative shrink-0">60%</p>
      <p className="relative shrink-0">40%</p>
      <p className="relative shrink-0">20%</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function YAxisLeft() {
  return (
    <div className="absolute contents font-['Lato:Regular',sans-serif] left-[-9px] not-italic text-[11.2px] top-[10px]" data-name="y-axis_left">
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col h-[14.971px] justify-end leading-[0] left-[47.5px] text-[#777279] text-center top-[24.97px] w-[113px]">
        <p className="leading-[16px] whitespace-pre-wrap">Resolution Mix</p>
      </div>
      <Frame2 />
    </div>
  );
}

function ResponsiveChart() {
  return (
    <div className="col-1 h-[200px] ml-0 mt-0 relative row-1 w-[1208px]" data-name="Responsive Chart">
      <Chart1 />
      <YAxisLeft />
    </div>
  );
}

function Graph1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="Graph">
      <ResponsiveChart />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#245728] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Full refund (12)</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText />
    </div>
  );
}

function LegendItem() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame9 />
      <Text2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#aa7fac] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Full unit replacement</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText1 />
    </div>
  );
}

function LegendItem1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame10 />
      <Text3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#646266] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Replacement parts</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText2 />
    </div>
  );
}

function LegendItem2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame11 />
      <Text4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#ffe38a] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Discount to keep</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText3 />
    </div>
  );
}

function LegendItem3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame12 />
      <Text5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#66256a] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Return</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText4 />
    </div>
  );
}

function LegendItem4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame13 />
      <Text6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#b3dbb3] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Medic/ Repair</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText5 />
    </div>
  );
}

function LegendItem5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame14 />
      <Text7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0">
      <div className="bg-[#363438] rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function BaseText6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="🧩 Base Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#646266] text-[11.2px]">Assistance Only</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <BaseText6 />
    </div>
  );
}

function LegendItem6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Legend Item">
      <Frame15 />
      <Text8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LegendItem4 />
      <LegendItem5 />
      <LegendItem6 />
    </div>
  );
}

function Legend() {
  return (
    <div className="relative shrink-0 w-full" data-name="Legend">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px_16px] items-center px-[32px] py-[16px] relative w-full">
          <LegendItem />
          <LegendItem1 />
          <LegendItem2 />
          <LegendItem3 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Graph1 />
      <Legend />
    </div>
  );
}

function Graph() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Graph">
      <TitleFilter />
      <LegentsNumbers />
      <Frame8 />
    </div>
  );
}

function Chart() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Chart">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[32px] py-[24px] relative size-full">
          <Graph />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex items-start relative size-full">
      <Chart />
    </div>
  );
}