import svgPaths from "./svg-q8ycgp7xhn";

function Heading1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Heading">
      <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[17.5px] whitespace-nowrap">
        <p className="leading-[24px]">Advertising Performance</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
      <Heading1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative" data-name="Title">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Header">
      <Title />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start mb-[-4px] relative shrink-0 w-full" data-name="📦 Text">
      <p className="flex-[1_0_0] font-['Sofia_Pro:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#211e22] text-[16px] whitespace-pre-wrap">Revenue ($)</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start mb-[-4px] relative shrink-0 w-full" data-name="📦 Text">
      <p className="flex-[1_0_0] font-['Sofia_Pro:Regular',sans-serif] leading-[19.5px] min-h-px min-w-px not-italic relative text-[#93939a] text-[13px] whitespace-pre-wrap">vs Spend | over a year</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[228px]">
      <Text />
      <Text1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p33119640} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Component00FullScreen() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="00 Full Screen">
      <Icon />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame />
      <Component00FullScreen />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Heading">
      <div className="flex flex-col font-['Sofia_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[31px] whitespace-nowrap">
        <p className="leading-[44.02px]">$189K</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4146280} id="Vector" stroke="var(--stroke-0, #245728)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TrendUp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trend Up">
      <Icon1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#245728] text-[14px] text-right">3.5%</p>
    </div>
  );
}

function Trend() {
  return (
    <div className="bg-[#b3dbb3] content-stretch flex gap-[8px] items-center mb-[-2px] px-[4px] relative rounded-[4px] shrink-0" data-name="Trend">
      <TrendUp />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start mb-[-2px] relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#93939a] text-[11.2px]">vs last month</p>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-[2px] relative shrink-0" data-name="Base">
      <Trend />
      <Text3 />
    </div>
  );
}

function Bold() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bold">
      <Heading2 />
      <Base />
    </div>
  );
}

function V() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[26px] items-end ml-0 mt-[0.5px] not-italic relative row-1 text-[#777279] text-[14px]" data-name="V">
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">50</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">40</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">30</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">20</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">10</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 text-right w-full">
        <p className="leading-[20px] whitespace-pre-wrap">0</p>
      </div>
    </div>
  );
}

function Lines() {
  return (
    <div className="col-1 h-[288px] ml-[30.64px] mt-0 relative row-1 w-[229.357px]" data-name="Lines">
      <div className="absolute inset-[-0.35%_-8.28%_0_-0.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 249.357 289">
          <g id="Lines">
            <line id="Line 1" stroke="var(--stroke-0, #F5F5F5)" x1="1.00027" x2="230.357" y1="0.5" y2="0.5" />
            <line id="Line 7" stroke="var(--stroke-0, #F5F5F5)" x1="1.00027" x2="230.357" y1="48.5" y2="48.5" />
            <line id="Line 6" stroke="var(--stroke-0, #F5F5F5)" x1="1.00027" x2="230.357" y1="96.5" y2="96.5" />
            <line id="Line 5" stroke="var(--stroke-0, #F5F5F5)" x1="1.00027" x2="230.357" y1="144.5" y2="144.5" />
            <line id="Line 4" stroke="var(--stroke-0, #F5F5F5)" x1="1.00027" x2="230.357" y1="192.5" y2="192.5" />
            <line id="Line 3" stroke="var(--stroke-0, #F5F5F5)" x1="1.00027" x2="230.357" y1="240.5" y2="240.5" />
            <line id="Line 2" stroke="var(--stroke-0, #D1D1D6)" x1="1.00027" x2="230.357" y1="288.5" y2="288.5" />
            <path d={svgPaths.pb3cc680} fill="url(#paint0_linear_32_21895)" id="Vector 3" />
            <path d={svgPaths.p1ccfb800} id="Vector 1" stroke="var(--stroke-0, #245728)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2bee5d00} id="Vector 4" stroke="var(--stroke-0, #B3DBB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_21895" x1="133.332" x2="135.063" y1="166" y2="196.401">
              <stop stopColor="#EDF7EC" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <V />
      <Lines />
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[#777279] text-[14px] w-[229px] whitespace-nowrap" data-name="H">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Jul 24</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Dec 24</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Jun 25</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-end justify-center leading-[0] overflow-clip pt-[8px] relative shrink-0 w-full">
      <Group />
      <H />
    </div>
  );
}

function Chart() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Chart 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Title1 />
          <Bold />
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start mb-[-4px] relative shrink-0 w-full" data-name="📦 Text">
      <p className="flex-[1_0_0] font-['Sofia_Pro:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#211e22] text-[16px] whitespace-pre-wrap">Units sold</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start mb-[-4px] relative shrink-0 w-full" data-name="📦 Text">
      <p className="flex-[1_0_0] font-['Sofia_Pro:Regular',sans-serif] leading-[19.5px] min-h-px min-w-px not-italic relative text-[#93939a] text-[13px] whitespace-pre-wrap">over a year</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[228px]">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p33119640} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Component00FullScreen1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="00 Full Screen">
      <Icon2 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame1 />
      <Component00FullScreen1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Heading">
      <div className="flex flex-col font-['Sofia_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[31px] whitespace-nowrap">
        <p className="leading-[44.02px]">189K</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p18131500} id="Vector" stroke="var(--stroke-0, #9B1000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TrendDown() {
  return (
    <div className="bg-[#f8c4c4] overflow-clip relative shrink-0 size-[24px]" data-name="Trend Down">
      <Icon3 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#9b1000] text-[14px] text-right">3.5%</p>
    </div>
  );
}

function Trend1() {
  return (
    <div className="bg-[#f8c4c4] content-stretch flex gap-[8px] items-center mb-[-2px] px-[4px] relative rounded-[4px] shrink-0" data-name="Trend">
      <TrendDown />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start mb-[-2px] relative shrink-0" data-name="📦 Text">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#93939a] text-[11.2px]">vs last month</p>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-[2px] relative shrink-0" data-name="Base">
      <Trend1 />
      <Text7 />
    </div>
  );
}

function Bold1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bold">
      <Heading3 />
      <Base1 />
    </div>
  );
}

function V1() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[26px] items-end ml-0 mt-[0.5px] not-italic relative row-1 text-[#777279] text-[14px]" data-name="V">
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">50</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">40</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">30</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">20</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 w-full">
        <p className="leading-[20px] whitespace-pre-wrap">10</p>
      </div>
      <div className="flex flex-col h-[26.182px] justify-center relative shrink-0 text-right w-full">
        <p className="leading-[20px] whitespace-pre-wrap">0</p>
      </div>
    </div>
  );
}

function Lines1() {
  return (
    <div className="col-1 h-[288px] ml-[30.64px] mt-0 relative row-1 w-[229.357px]" data-name="Lines">
      <div className="absolute inset-[-0.35%_-15.8%_0_-0.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266.926 289">
          <g id="Lines">
            <line id="Line 1" stroke="var(--stroke-0, #F5F5F5)" x1="1.33336" x2="230.691" y1="0.5" y2="0.5" />
            <line id="Line 7" stroke="var(--stroke-0, #F5F5F5)" x1="1.33336" x2="230.691" y1="48.5" y2="48.5" />
            <line id="Line 6" stroke="var(--stroke-0, #F5F5F5)" x1="1.33336" x2="230.691" y1="96.5" y2="96.5" />
            <line id="Line 5" stroke="var(--stroke-0, #F5F5F5)" x1="1.33336" x2="230.691" y1="144.5" y2="144.5" />
            <line id="Line 4" stroke="var(--stroke-0, #F5F5F5)" x1="1.33336" x2="230.691" y1="192.5" y2="192.5" />
            <line id="Line 3" stroke="var(--stroke-0, #F5F5F5)" x1="1.33336" x2="230.691" y1="240.5" y2="240.5" />
            <line id="Line 2" stroke="var(--stroke-0, #D1D1D6)" x1="1.33336" x2="230.691" y1="288.5" y2="288.5" />
            <g id="Group 23">
              <path d={svgPaths.p1bfbbd30} fill="url(#paint0_linear_32_23599)" id="Vector 2" />
              <path d={svgPaths.p34d96280} id="Vector 1" stroke="var(--stroke-0, #9B1000)" strokeWidth="2" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_23599" x1="142.428" x2="132.778" y1="135.5" y2="335.579">
              <stop offset="0.0291672" stopColor="#FCF2F1" />
              <stop offset="0.573275" stopColor="#FCF2F1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <V1 />
      <Lines1 />
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex font-['Lato:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[#777279] text-[14px] w-[229px] whitespace-nowrap" data-name="H">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Jul 24</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Dec 24</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Jun 25</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-end justify-center leading-[0] overflow-clip pt-[8px] relative shrink-0 w-full">
      <Group1 />
      <H1 />
    </div>
  );
}

function Chart1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Chart 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Title2 />
          <Bold1 />
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component2X() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="2x">
      <Chart />
      <Chart1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4146280} id="Vector" stroke="var(--stroke-0, #245728)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TrendUp1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trend Up">
      <Icon4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Text">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#245728] text-[11.2px] whitespace-pre-wrap">2% of revenue spend on advertising is giving 12% boost in total revenue.</p>
    </div>
  );
}

function Base2() {
  return (
    <div className="bg-[#edf7ec] relative rounded-[8px] shrink-0 w-full" data-name="Base">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <TrendUp1 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

export default function AdPerf() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[12px] px-[20px] relative rounded-[16px] size-full" data-name="AD PERF">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header />
      <Component2X />
      <Base2 />
    </div>
  );
}