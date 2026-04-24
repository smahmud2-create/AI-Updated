function Layout() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Layout">
      <div aria-hidden="true" className="absolute border-[#66256a] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-0 pt-[12px] px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">Label</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segment() {
  return (
    <div className="bg-white h-[48px] relative shrink-0" data-name="Segment 1">
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative rounded-[inherit]">
        <Layout />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Segment1() {
  return (
    <div className="bg-[#d1d1d6] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative shrink-0" data-name="Segment 2">
      <div className="css-g0mm18 flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function Segment2() {
  return (
    <div className="bg-[#d1d1d6] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative shrink-0" data-name="Segment 3">
      <div className="css-g0mm18 flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function Segment3() {
  return (
    <div className="bg-[#d1d1d6] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative shrink-0" data-name="Segment 4">
      <div className="css-g0mm18 flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function Segment4() {
  return (
    <div className="bg-[#d1d1d6] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative shrink-0" data-name="Segment 5">
      <div className="css-g0mm18 flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function Layout1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Layout">
      <div aria-hidden="true" className="absolute border-[#d1d1d6] border-solid border-t inset-0 pointer-events-none" />
      <Segment />
      <Segment1 />
      <Segment2 />
      <Segment3 />
      <Segment4 />
    </div>
  );
}

export default function Tabs() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="📦 Tabs">
      <Layout1 />
    </div>
  );
}