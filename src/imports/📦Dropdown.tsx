import svgPaths from "./svg-i4ka7mv2zu";

export default function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative size-full" data-name="📦 Dropdown">
      <div className="h-[48px] relative shrink-0 w-full z-[2]" data-name="Label + Right Icon">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center leading-[0] pl-[16px] pr-0 py-0 relative size-full">
            <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#4d4a4f] text-[14px] text-nowrap">
              <p className="leading-[20px]">50</p>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Chevron Icon">
              <div className="[grid-area:1_/_1] content-stretch flex items-start ml-0 mt-0 relative" data-name="Tap Target">
                <div className="shrink-0 size-[48px]" data-name="Fixed Size" />
              </div>
              <div className="[grid-area:1_/_1] ml-[12px] mt-[12px] overflow-clip relative size-[24px]" data-name="Chevron Down">
                <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Icon">
                      <path d={svgPaths.p11c90b00} fill="var(--fill-0, #211E22)" id="Vector" stroke="var(--stroke-0, #211E22)" strokeWidth="0.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[48px] left-0 right-0 rounded-[4px] top-0 z-[1]" data-name="Background">
        <div aria-hidden="true" className="absolute border-[#4d4a4f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}