import svgPaths from "./svg-o1g4gjb3hy";

function JumpToFirst() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Jump to First">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p38a03d80} fill="var(--fill-0, #93939A)" />
            <path d={svgPaths.pc1bae80} fill="var(--fill-0, #93939A)" />
            <path d={svgPaths.p38a03d80} stroke="var(--stroke-0, #93939A)" strokeWidth="0.5" />
            <path d={svgPaths.pc1bae80} stroke="var(--stroke-0, #93939A)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Layout() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Layout">
      <JumpToFirst />
    </div>
  );
}

function SystemIcon() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="📦 System Icon">
      <Layout />
    </div>
  );
}

function BackByOneControl() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Back by One Control">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2b9e1800} fill="var(--fill-0, #4D4A4F)" id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon">
      <div className="absolute h-[14.995px] left-[9px] top-[4.51px] w-[8.003px]" data-name="Vector">
        <div className="absolute inset-[-1.67%_-3.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.50304 15.495">
            <path d={svgPaths.p18e21900} fill="var(--fill-0, #4D4A4F)" id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdvanceByOneControl() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Advance by One Control">
      <Icon />
    </div>
  );
}

function JumpToLastControl() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Jump to Last Control">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.pb64e140} fill="var(--fill-0, #4D4A4F)" />
            <path d={svgPaths.p349aac80} fill="var(--fill-0, #4D4A4F)" />
            <path d={svgPaths.pb64e140} stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
            <path d={svgPaths.p349aac80} stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function IconControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[12px] relative size-full" data-name="Icon Controls">
      <SystemIcon />
      <BackByOneControl />
      <AdvanceByOneControl />
      <JumpToLastControl />
    </div>
  );
}