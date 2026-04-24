import svgPaths from "./svg-a7b98suxi9";

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p18131500} id="Vector" stroke="var(--stroke-0, #541212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TrendDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trend Down">
      <Icon />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fcf2f1] content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
      <TrendDown />
      <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#541212] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Regular',sans-serif] leading-[24px] text-[17.5px]">4.25%</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[0px] whitespace-nowrap">
        <p className="font-['Lato:Regular',sans-serif] leading-[40px] text-[27.34px]">Indoor Sofas</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Background() {
  return <div className="absolute bg-[#d1d1d6] inset-0 rounded-[4px] z-[1]" data-name="Background" />;
}

function Layout() {
  return (
    <div className="content-stretch flex isolate items-center justify-center px-[8px] relative shrink-0" data-name="Layout">
      <div className="flex flex-col font-['Sofia_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[13px] text-center whitespace-nowrap z-[2]">
        <p className="leading-[19.5px]">Standard (71 - 86)</p>
      </div>
      <Background />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Badge">
      <Layout />
    </div>
  );
}

function Background1() {
  return <div className="absolute bg-[#d1d1d6] inset-0 rounded-[4px] z-[1]" data-name="Background" />;
}

function Layout1() {
  return (
    <div className="content-stretch flex isolate items-center justify-center px-[8px] relative shrink-0" data-name="Layout">
      <div className="flex flex-col font-['Sofia_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[13px] text-center whitespace-nowrap z-[2]">
        <p className="leading-[19.5px]">OPP</p>
      </div>
      <Background1 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Badge">
      <Layout1 />
    </div>
  );
}

function Background2() {
  return <div className="absolute bg-[#d1d1d6] inset-0 rounded-[4px] z-[1]" data-name="Background" />;
}

function Layout2() {
  return (
    <div className="content-stretch flex isolate items-center justify-center px-[8px] relative shrink-0" data-name="Layout">
      <div className="flex flex-col font-['Sofia_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[13px] text-center whitespace-nowrap z-[2]">
        <p className="leading-[19.5px]">Modern</p>
      </div>
      <Background2 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Badge">
      <Layout2 />
    </div>
  );
}

function Background3() {
  return <div className="absolute bg-[#d1d1d6] inset-0 rounded-[4px] z-[1]" data-name="Background" />;
}

function Layout3() {
  return (
    <div className="content-stretch flex isolate items-center justify-center px-[8px] relative shrink-0" data-name="Layout">
      <div className="flex flex-col font-['Sofia_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[13px] text-center whitespace-nowrap z-[2]">
        <p className="leading-[19.5px]">Fabric</p>
      </div>
      <Background3 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Badge">
      <Layout3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function Segment() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Segment 1">
      <div className="content-stretch flex flex-col h-full items-center overflow-clip pt-[12px] px-[16px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">GRS 3M</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#66256a] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Segment1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center overflow-clip pt-[12px] px-[16px] relative shrink-0" data-name="Segment 2">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">GRS 6M</p>
      </div>
    </div>
  );
}

function Segment2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center overflow-clip pt-[12px] px-[16px] relative shrink-0" data-name="Segment 3">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">GRS 12M (LTM)</p>
      </div>
    </div>
  );
}

function Layout4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Layout">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-b border-solid inset-0 pointer-events-none" />
      <Segment />
      <Segment1 />
      <Segment2 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Tabs">
      <Layout4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 font-['Lato:Regular',sans-serif] h-[281px] ml-0 mt-0 not-italic relative row-1 text-[#777279] text-[14px] w-[22.691px]">
      <div className="-translate-y-1/2 absolute flex flex-col h-[26.182px] justify-center left-[16px] top-[274.91px] w-[9px]">
        <p className="leading-[20px] whitespace-pre-wrap">0</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[26.182px] justify-center left-0 top-[222.55px] w-[25px]">
        <p className="leading-[20px] whitespace-pre-wrap">25</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[26.182px] justify-center left-0 top-[170.18px] w-[25px]">
        <p className="leading-[20px] whitespace-pre-wrap">50</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[26.182px] justify-center left-0 top-[117.82px] w-[25px]">
        <p className="leading-[20px] whitespace-pre-wrap">75</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[26.182px] justify-center left-0 top-[65.45px] w-[25px]">
        <p className="leading-[20px] whitespace-pre-wrap">100</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[26.182px] justify-center left-0 top-[13.09px] w-[25px]">
        <p className="leading-[20px] whitespace-pre-wrap">125</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 h-[288px] ml-[51.1px] mt-0 relative row-1 w-[884.897px]">
      <div className="absolute inset-[-0.35%_-41.03%_0_-0.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1249.09 289">
          <g id="Frame 1544">
            <line id="Line 1" stroke="var(--stroke-0, #F5F5F5)" x1="1.15921" x2="1249.09" y1="0.5" y2="0.5" />
            <line id="Line 7" stroke="var(--stroke-0, #F5F5F5)" x1="1.15921" x2="1249.09" y1="48.5" y2="48.5" />
            <line id="Line 6" stroke="var(--stroke-0, #F5F5F5)" x1="1.15921" x2="1249.09" y1="96.5" y2="96.5" />
            <line id="Line 5" stroke="var(--stroke-0, #F5F5F5)" x1="1.15921" x2="1249.09" y1="144.5" y2="144.5" />
            <line id="Line 4" stroke="var(--stroke-0, #F5F5F5)" x1="1.15921" x2="1249.09" y1="192.5" y2="192.5" />
            <line id="Line 3" stroke="var(--stroke-0, #F5F5F5)" x1="1.15921" x2="1249.09" y1="240.5" y2="240.5" />
            <line id="Line 2" stroke="var(--stroke-0, #93939A)" x1="1.15921" x2="1249.09" y1="288.5" y2="288.5" />
            <g id="Group 23">
              <path d={svgPaths.p30649480} id="Vector 1" stroke="var(--stroke-0, #541212)" strokeWidth="2" />
              <path d={svgPaths.p8095c00} fill="url(#paint0_linear_32_18496)" id="Vector 2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_18496" x1="456.8" x2="453.8" y1="135.5" y2="336">
              <stop offset="0.0291672" stopColor="#CB0000" stopOpacity="0.2" />
              <stop offset="0.573275" stopColor="#CB0000" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-between leading-[0] not-italic px-[64px] relative text-[#777279] text-[14px] w-full whitespace-nowrap">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[20px]">Jan 2025</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[20px]">Feb 2025</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[20px]">Mar 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip pt-[8px] relative shrink-0 w-full">
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip top-0 w-[936px]">
      <Frame9 />
      <Frame8 />
      <Tabs />
      <Frame />
    </div>
  );
}

function Segment3() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Segment 1">
      <div className="content-stretch flex flex-col h-full items-center overflow-clip pt-[12px] px-[16px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Top Performers</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#66256a] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Segment4() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center overflow-clip pt-[12px] px-[16px] relative shrink-0" data-name="Segment 2">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Low Performers</p>
      </div>
    </div>
  );
}

function Segment5() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center overflow-clip pt-[12px] px-[16px] relative shrink-0" data-name="Segment 3">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4a4f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">More</p>
      </div>
    </div>
  );
}

function Layout5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Layout">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-b border-solid inset-0 pointer-events-none" />
      <Segment3 />
      <Segment4 />
      <Segment5 />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Tabs">
      <Layout5 />
    </div>
  );
}

function Group5() {
  return (
    <div className="font-['Lato:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-0 mt-[10px] relative row-1 text-[0px] w-[57.892px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px] whitespace-pre-wrap">Product</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[10px] relative row-1 text-[14px] text-right w-[155.762px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Sampson 71”  Sofa`}</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[28px] relative row-1 text-[11.2px] text-right w-[47.676px]">
        <p className="leading-[16px] whitespace-pre-wrap">$8,203</p>
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#d1d1d6] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />;
}

function Divider() {
  return (
    <div className="content-stretch flex h-px items-start relative shrink-0 w-full" data-name="📦 Divider">
      <Divider1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="font-['Lato:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[28px] relative row-1 text-[11.2px] text-right w-[111.258px]">
        <p className="leading-[16px] whitespace-pre-wrap">$22,200</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[10px] relative row-1 text-[14px] text-right w-[155.762px]">
        <p className="leading-[20px] whitespace-pre-wrap">Right On Sofa Supply</p>
      </div>
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-0 mt-[10px] relative row-1 text-[0px] w-[60.162px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px] whitespace-pre-wrap">Supplier</p>
      </div>
    </div>
  );
}

function Divider3() {
  return <div className="bg-[#d1d1d6] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />;
}

function Divider2() {
  return (
    <div className="content-stretch flex h-px items-start relative shrink-0 w-full" data-name="📦 Divider">
      <Divider3 />
    </div>
  );
}

function Group3() {
  return (
    <div className="font-['Lato:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[28px] relative row-1 text-[11.2px] text-right w-[91.232px]">
        <p className="leading-[16px] whitespace-pre-wrap">$18,492</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[10px] relative row-1 text-[14px] text-right w-[150.199px]">
        <p className="leading-[20px] whitespace-pre-wrap">Naomi</p>
      </div>
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-0 mt-[10px] relative row-1 text-[0px] w-[73.784px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px] whitespace-pre-wrap">Collection</p>
      </div>
    </div>
  );
}

function Divider5() {
  return <div className="bg-[#d1d1d6] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />;
}

function Divider4() {
  return (
    <div className="content-stretch flex h-px items-start relative shrink-0 w-full" data-name="📦 Divider">
      <Divider5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="font-['Lato:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[336px] mt-[28px] relative row-1 text-[11.2px] text-right w-[83.444px]">
        <p className="leading-[16px] whitespace-pre-wrap">$52,922</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col justify-center ml-[335.97px] mt-[10px] relative row-1 text-[14px] text-right w-[118.054px]">
        <p className="leading-[20px] whitespace-pre-wrap">Living Room</p>
      </div>
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-0 mt-[10px] relative row-1 text-[0px] w-[65.838px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px] whitespace-pre-wrap">Category</p>
      </div>
    </div>
  );
}

function Divider7() {
  return <div className="bg-[#d1d1d6] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />;
}

function Divider6() {
  return (
    <div className="content-stretch flex h-px items-start relative shrink-0 w-full" data-name="📦 Divider">
      <Divider7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="font-['Lato:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-[288.32px] mt-[28px] relative row-1 text-[11.2px] w-[47.676px]">
        <p className="leading-[16px] whitespace-pre-wrap">$43,452</p>
      </div>
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-[297.4px] mt-[10px] relative row-1 text-[14px] w-[38.595px]">
        <p className="leading-[20px] whitespace-pre-wrap">Sofas</p>
      </div>
      <div className="-translate-y-1/2 col-1 flex flex-col justify-center ml-0 mt-[10px] relative row-1 text-[0px] w-[37.459px]">
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] text-[14px] whitespace-pre-wrap">Class</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white h-[416px] left-[952px] rounded-[8px] top-0 w-[368px]">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Tabs1 />
        <Group5 />
        <Divider />
        <Group4 />
        <Divider2 />
        <Group3 />
        <Divider4 />
        <Group2 />
        <Divider6 />
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Performance() {
  return (
    <div className="absolute h-[440px] left-[28px] top-[20px] w-[1320px]" data-name="Performance">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

export default function Frame10() {
  return (
    <div className="border border-[#d1d1d6] border-solid overflow-clip relative rounded-[8px] size-full">
      <Performance />
    </div>
  );
}