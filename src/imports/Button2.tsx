function Content() {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] z-[2]">
            <p className="css-ew64yg leading-[20px]">Secondary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white inset-0 rounded-[4px] z-[1]" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#66256a] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex flex-col h-[48px] isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
      <Content />
      <Background />
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Button 2">
      <Layout />
    </div>
  );
}