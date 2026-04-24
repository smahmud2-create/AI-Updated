import svgPaths from "./svg-lop7xh1sdw";

export default function LeftIconLabelRightIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-0 py-0 relative size-full" data-name="Left Icon + Label + Right Icon">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Left Icon + Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="📦 Swap Left icon">
              <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Icon">
                    <path d={svgPaths.p2598280} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="basis-0 flex flex-col font-['Sofia_Pro:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4a4f] text-[16px]">
              <p className="leading-[24px]">Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}