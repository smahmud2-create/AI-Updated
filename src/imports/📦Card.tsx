import svgPaths from "./svg-kqj95wreom";

function FixedSize() {
  return <div className="shrink-0 size-[16px]" data-name="Fixed Size" />;
}

function TopPadding() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="↑Top Padding">
      <FixedSize />
    </div>
  );
}

function FixedSize1() {
  return <div className="shrink-0 size-[16px]" data-name="Fixed Size" />;
}

function LeftPadding() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="← Left Padding">
      <FixedSize1 />
    </div>
  );
}

function InstanceSwap() {
  return (
    <div className="bg-[#f4ebff] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name=".🛠 Instance Swap">
      <div aria-hidden="true" className="absolute border border-[#9778b9] border-dashed inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[52px] py-[100px] relative size-full">
          <div className="h-[31.017px] relative shrink-0 w-[40.241px]" data-name="⬦ Instance Swap">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.2415 31.0167">
              <g id="â¬¦ Instance Swap">
                <path d={svgPaths.p31bc0e80} fill="var(--fill-0, #9778B9)" />
                <path d={svgPaths.p17a72100} fill="var(--fill-0, #9778B9)" />
                <path d={svgPaths.p34304f00} fill="var(--fill-0, #9778B9)" />
                <path d={svgPaths.p106c6500} fill="var(--fill-0, #9778B9)" />
                <path d={svgPaths.p3a7df8f0} fill="var(--fill-0, #9778B9)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FixedSize2() {
  return <div className="shrink-0 size-[16px]" data-name="Fixed Size" />;
}

function RightPadding() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="→ Right Padding">
      <FixedSize2 />
    </div>
  );
}

function Alignment() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Alignment">
      <LeftPadding />
      <InstanceSwap />
      <RightPadding />
    </div>
  );
}

function FixedSize3() {
  return <div className="shrink-0 size-[16px]" data-name="Fixed Size" />;
}

function BottomPadding() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="↓ Bottom Padding">
      <FixedSize3 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[#d1d1d6] content-stretch flex flex-col items-center relative rounded-[4px] size-full" data-name="📦 Card">
      <div aria-hidden="true" className="absolute border border-[#363438] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_3px_6px_0px_rgba(33,30,34,0.2)]" />
      <TopPadding />
      <Alignment />
      <BottomPadding />
    </div>
  );
}