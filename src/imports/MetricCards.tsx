import svgPaths from "./svg-dfzew4kg5e";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4d4a4f] text-[16px]">Retail RoAS</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="📍 Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð Icon">
          <path d={svgPaths.p23eaee00} fill="var(--fill-0, #777279)" id="Vector" />
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

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <Text />
      <Information />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Heading">
      <div className="flex flex-col font-['Sofia_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[25px] whitespace-nowrap">
        <p className="leading-[36px]">17.6x</p>
      </div>
    </div>
  );
}

function Bold() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bold">
      <Heading />
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

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#245728] text-[16px]">3.5%</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#4d4a4f] text-[13px]">in last 28 days</p>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Base">
      <TrendUp />
      <Text1 />
      <Text2 />
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Dashboard Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
        <Title />
        <Bold />
        <Base />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4d4a4f] text-[16px]">Retail Revenue</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="📍 Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð Icon">
          <path d={svgPaths.p23eaee00} fill="var(--fill-0, #777279)" id="Vector" />
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

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <Text3 />
      <Information1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Heading">
      <div className="flex flex-col font-['Sofia_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[25px] whitespace-nowrap">
        <p className="leading-[36px]">$259,456</p>
      </div>
    </div>
  );
}

function Bold1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bold">
      <Heading1 />
    </div>
  );
}

function Icon3() {
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
      <Icon3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#245728] text-[16px]">3.5%</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#4d4a4f] text-[13px]">in last 28 days</p>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Base">
      <TrendUp1 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function DashboardCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Dashboard Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
        <Title1 />
        <Bold1 />
        <Base1 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4d4a4f] text-[16px]">Spend</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="📍 Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð Icon">
          <path d={svgPaths.p23eaee00} fill="var(--fill-0, #777279)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Information2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Information">
      <Icon4 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <Text6 />
      <Information2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Heading">
      <div className="flex flex-col font-['Sofia_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[25px] whitespace-nowrap">
        <p className="leading-[36px]">$10,376</p>
      </div>
    </div>
  );
}

function Bold2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bold">
      <Heading2 />
    </div>
  );
}

function Icon5() {
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

function TrendUp2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trend Up">
      <Icon5 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#245728] text-[16px]">3.5%</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#4d4a4f] text-[13px]">in last 28 days</p>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Base">
      <TrendUp2 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function DashboardCard2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Dashboard Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
        <Title2 />
        <Bold2 />
        <Base2 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4d4a4f] text-[16px]">Impressions</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="📍 Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð Icon">
          <path d={svgPaths.p23eaee00} fill="var(--fill-0, #777279)" id="Vector" />
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

function Title3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <Text9 />
      <Information3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="📦 Heading">
      <div className="flex flex-col font-['Sofia_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[25px] whitespace-nowrap">
        <p className="leading-[36px]">69,456</p>
      </div>
    </div>
  );
}

function Bold3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bold">
      <Heading3 />
    </div>
  );
}

function Icon7() {
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

function TrendUp3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trend Up">
      <Icon7 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#245728] text-[16px]">3.5%</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Text">
      <p className="font-['Sofia_Pro:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#4d4a4f] text-[13px]">in last 28 days</p>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Base">
      <TrendUp3 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function DashboardCard3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Dashboard Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
        <Title3 />
        <Bold3 />
        <Base3 />
      </div>
    </div>
  );
}

export default function MetricCards() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] size-full" data-name="Metric Cards">
      <DashboardCard />
      <DashboardCard1 />
      <DashboardCard2 />
      <DashboardCard3 />
    </div>
  );
}